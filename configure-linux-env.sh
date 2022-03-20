#!/bin/bash

APACHE_MAVEN_URL=https://dlcdn.apache.org/maven/maven-3/3.8.5/binaries/$APACHE_MAVEN_3_8_5_FILENAME
APACHE_MAVEN_3_8_5_FILENAME=apache-maven-3.8.5-bin.tar.gz

SQLDEVELOPER_URL=
SQLDEVELOPER
https://www.oracle.com/webapps/redirect/signon?nexturl=https://download.oracle.com/otn/java/sqldeveloper/sqldeveloper-21.4.3.063.0100-no-jre.zip

echo -e "System Version"
lsb_release -a

echo -e "Install nvm for linux"
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

mkdir temporary-folder
cd temporary-folder/

echo -e "Install maven for Java backend build"
wget -o apache-maven-3.8.5-bin.tar.gz $APACHE_MAVEN_URL

echo -e "Edit .bashrc file to add to PATH your MAVEN_HOME to use mvn command with bash shell"

echo -e "\n Install dotnet"
wget https://packages.microsoft.com/config/debian/11/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
rm packages-microsoft-prod.deb

echo -e "Install dotnet sdk 6.0"
sudo apt update
sudo apt install -y apt-transport-https 
sudo apt update
sudo apt install -y dotnet-sdk-6.0

echo -e "Install dotnet runtime 6.0"
sudo apt update
sudo apt install -y apt-transport-https
sudo apt update
sudo apt install -y aspnetcore-runtime-6.0 dotnet-runtime-6.0

echo -e "Install SQL Server"
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add microsoft.asc
sudo add-apt-repository "$(wget -qO- https://packages.microsoft.com/config/ubuntu/20.04/mssql-server-2019.list)"
sudo apt update
sudo apt install -y mssql-server
sudo /opt/mssql/bin/mssql-conf setup
systemctl status mssql-server --no-pager

echo -e "Install SQL Server command-line tools"
sudo apt update
sudo apt install -y curl
curl https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add -
curl https://packages.microsoft.com/config/ubuntu/20.04/prod.list | sudo tee /etc/apt/sources.list.d/msprod.list
sudo apt update
sudo apt install -y mssql-tools unixodbc-dev
echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> ~/.bashrc
source ~/.bashrc

echo -e
wget -o https://www.oracle.com/webapps/redirect/signon?nexturl=https://download.oracle.com/otn/java/sqldeveloper/sqldeveloper-21.4.3.063.0100-no-jre.zip

#echo -e "Verify connection on SQL Server"
#sqlcmd -S localhost -U SA -P '<YourPassword>'
