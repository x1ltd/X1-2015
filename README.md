# X1-2015
The 2015 X1 website remake

### Installation

```shell
# Open your terminal, paste the text below in and then follow the instructions it gives you
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# then to get the packages you need to begin using node
brew update
brew upgrade
brew install node git

# Clone the package from github
#   Choose where the files go. You can type "cd " (note the space) then drag the directory into the console
#   Note that when you drag a folder in, you will see its path appear in the terminal
cd /path/to/the/directory
git clone git@github.com:x1ltd/X1-2015.git

# Go into this new directory
cd ./X1-2015
# Install the required dependencies
npm install

# Then run grunt
grunt
```
