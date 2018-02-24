# Sample Node Shopping

## Instalação

### Requirements
Instalar docker https://www.docker.com/community-edition e `docker-compose`.

```
sudo curl -L https://github.com/docker/compose/releases/download/1.19.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
# Command-line completion
sudo curl -L https://raw.githubusercontent.com/docker/compose/1.19.0/contrib/completion/bash/docker-compose -o /etc/bash_completion.d/docker-compose
source ~/.bash_profile
```



### Basic
```
git clone https://github.com/2bec/shopping.git
cd shopping
sudo cp deeploy/nginx/shopping.dev /etc/nginx/sites-available/
sed -i 's/shopping.2bec.dev/{your-domain-name}/g /etc/nginx/sites-available/shopping.dev'
sudo ln -s /etc/nginx/sites-available/shopping.dev /etc/nginx/sites-enabled/
sudo nginx -t && sudo service nginx restart
```
