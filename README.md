# TWD Group Project
This is a TWD group project.

## Project Installation, Building and Submission Instructions

**IMPORTANT:** Please follow both the install and the project instructions fully. Failure to do so will result in development errors, build errors, project submission errors and loss of marks for not following instructions.

Don't be a cowboy coder. Read and follow the below instructions.

## Install Instructions

The following instructions, assume you have already installed, Node.js, Git and / or the GitHub Desktop application on your computer system. 

- [Install Node.js](https://nodejs.org/)
- [Install Git](https://git-scm.com/)
- [Install the GitHub Desktop Application](https://desktop.github.com/)

To install this project do the following:

### 1. Clone this Repo

### Option 1 - Using the GitHub Desktop Application

<ol>
  <li>Open the GitHub desktop application
    <ul>
      <li><strong>Note:</strong> If you haven't already done so, make sure to sign in to your GitHub account from within the application. You can do so by going to "Github > Preferences" on the Mac app or "File > Options" on the Windows app</li>
    </ul>
  </li>
  <li>Clone this repo by going to "File > Clone Repository" from within the application</li>
  <li>Select the "GitHub.com" tab and find this repo from the list of repos listed</li>
  <li>Before clicking the "Clone" button, first select a location on your computer where you want to store this repository by clicking the "Choose" button
    <ul>
      <li><strong>Important: </strong>Do <strong>NOT</strong> store this repo inside a cloud drive such as Dropbox, Google Drive, Sharefile or One Drive. Doing so will cause errors. Remember your code will be backed up to GitHub in the cloud, so your data is safe in the event that you loose a local copy of this repo.</li>
    </ul>
  </li>
</ol>

### Option 2 - Using the Terminal (Mac) / PowerShell or CMD Prompt (Windows)

<ol>
  <li>Click the green "Clone or Download" button located above this repo's file listings<br><br><img src="https://res.michaelwhyte.ca/github-clone-download-button-with-red-circle.jpg" alt="GitHub clone or download button"><br><br></li>
  <li>Once the clone dialog has opened, click the copy icon to copy this repo's clone URL<br><br><img src="https://res.michaelwhyte.ca/github-clone-repo-dialog.jpg" alt="GitHub clone repo dialog"><br><br></li>
  <li>On your local computer open the Terminal app (Mac) or PowerShell or CMD Prompt on Windows</li>
  <li>With your terminal application open, change the directory to a folder on your computer where you want to save this repo. Enter the "cd" command followed by the path to the location where you want this to saved on your computer and press "Enter". Do not enter the "$" character. The "$" represents your terminal prompt.<br><br>
    <div class="highlight highlight-source-shell">
      <pre>
$ cd the\path\to\the\folder\where\you\want\to\store\this\repo...</pre>
    </div>
    <p><strong>Important: </strong>Do <strong>NOT</strong> store this repo inside a cloud drive such as Dropbox, Google Drive, Sharefile or One Drive. Doing so will cause errors. Remember your code will be backed up to GitHub in the cloud, so your data is safe in the event that you loose a local copy of this repo.</p></li>
  </li>
  <li>With your terminal pointing to the location where you want to store the repo, enter the git clone command followed by a space. Then paste in this repo's clone URL (copied in list item 2, above). Use "Cmd+v" on a Mac or "Ctrl+v" on a Windows machine to do this. Then press enter and Git will clone this repo down to your computer.<br><br>See sample terminal command below. Do NOT copy this command into your terminal, it will not work. Paste in your URL from list item 2 above.<br><br>
  <div class="highlight highlight-source-shell">
    <pre>
$ repos> git clone https://github.com/path-to-some-repo/do-not-copy-this-url.git</pre>
  </div>
</li>
</ol>

### 2. Install Gulp Globally

**Note:** If you have already installed Gulp globally on your computer for another project, then you can skip this step.

Install Gulp.js globally on your machine by launching the terminal app on a Mac, the Node.js CMD Prompt or Powershell on Windows and typing the following command and pressing enter:

#### Mac Terminal Command

```shell
$ sudo npm install gulp -g 
```
**Note:** On a Mac after entering the above command you will be prompted to enter your computer's login password. When you enter the password into the terminal nothing will appear to be happening. This is normal, just keep typing your password and then press enter.

#### Windows Node.js CMD Prompt or PowerShell

```shell
$ npm install gulp -g
```
### 3. Install this Repo's Node Dependencies

In the Terminal app (Mac) or the Node.js CMD Prompt or PowerShell (Windows), change the directory to the directory where you cloned this repo on your computer in step 1.

```shell
$ yourComputer> cd the/path/to/your/repo/on/your/computer
```

With your terminal application pointed at this repo's folder, type the following command and press enter.

```shell
$ npm install
```

That's it! You have installed this repo and are now ready to run and build this project.

## Build Instructions

Most of your time will be spent writing the code to "build" this project



