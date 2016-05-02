# First Time Setup

This guide will give a brief outline on how to download, setup, and run the Storyspace web application for development.

First, let's grab the repository from GitHub. In a terminal, navigate to a directory where you would like `git` to place the repository folder.

```
git clone https://github.com/storyspace/storyspace.git
```

We will assume you have Python already installed. If not, please install it.

Next, we will install `pip`. `pip` is a popular package manager for Python based tools and resources that we will use to install various dependencies and manage development environments. If you do not have `pip` already installed, you can install it via

```
sudo easy_install pip
```

Then, we will install `virtualenv`, a tool used to create and manage development environments for Python projects.

```
sudo pip install virtualenv
```

Navigate to the Storyspace repository.

```
cd storyspace
```

Next, we will create our own development environment for the Storyspace project, "activate" the environment, and install any dependencies.

> Note that this particular invocation of `pip` does not use `sudo`. Using `sudo` will result in `pip` installing packages outside the development environment.

```
virtualenv env/
source env/bin/activate
pip install -r requirements.txt
```

We'll need to create a `secrets.py` file with some secret keys. This file should not have come with the cloned `git` repository, as it is `.gitignore`'d.

```
printf "CSRF_SESSION_KEY = 'foo'\nSECRET_KEY = 'bar'\n" > secrets.py
```

You should now have all the necessary components to spin up a development server.

```
python run.py
```

You can visit `http://localhost:8000/` to see your web application. Use `control-C` to stop the serving program.

When you are done with the server, you may do
```
deactivate
```
to deactivate the development environment.

# Running the Server Afterwards

From now on, you can start up the Storyspace web application by

1. Activating the `virtualenv` development environment
2. Running the Python `run.py` script

Just navigate to the repository directory and do

```
source env/bin/activate
python run.py
```

You may also use the `deactivate` command to deactivate the development environment.
