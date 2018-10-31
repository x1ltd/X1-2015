# X1-2015
The 2015 X1 website remake

## Installation

### Install HomeBrew.

This is the easiest way to install our terminal apps to get the site working.
To do so, follow the instructions on https://brew.sh/ .

### Install node and git

`node` is the server. This includes `npm`, node package manager, which will help us to install and run grunt.
`git` is what we use to download, version our code, and sync it up with GitHub

To do so, open the terminal and enter:
```shell
brew install node git
```
It should install both and end up with a positive message saying it has completed.

### Install grunt

This is what minifies and connects your code together.

To do so, open the terminal and enter:
```shell
npm install -g grunt
```
This tells npm to install grunt globally on your computer. You can actually replace the `-g` with `--global` and it will do the same thing.

### Clone the package from github

First change directory in the terminal to the parent folder of where you want the site to go.
You can type "`cd `" (note the space) then drag the directory into the console.
Note that when you drag a folder in, you will see its path appear in the terminal
If the text looks something like `cd /path/to/the/directory`, then hit enter

Now on https://github.com/x1ltd/X1-2015 find the repo's clone URL (this should look something like `git@github.com:x1ltd/X1-2015.git`) and type this into the terminal then hit enter:
```shell
git clone [CLONE_URL]
```
That is, something like:
```shell
git clone git@github.com:x1ltd/X1-2015.git
```

### Install the required dependencies
Go into, or `c`hange `d`irectory to, the directory that git just created:
```shell
cd ./X1-2015
```

And run:
```shell
npm install
```

### Run grunt

Now you should be able to run the grunt command when inside the folder:
```shell
grunt
```
