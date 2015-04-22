var argv = require('yargs').argv;
var username = argv.user || "joe";

var os = require("os");
var platform = os.platform();
var user;
var pathToSDK;
if (platform === 'win32') {
  home = 'C:' + process.env.HOMEPATH;
  user = process.env.USERNAME;
  pathToSDK = 'sdk.dir=C\:\\Users\\' + user + '\\AppData\\Local\\Android\\sdk';
} else {
  home = process.env.HOME;
  user = process.env.USER;
  pathToSDK = 'sdk.dir=/Users/' + user + '/Library/Android/sdk';
}

exports.local_properties = '## This file is automatically generated by Android Studio.\n\
# Do not modify this file -- YOUR CHANGES WILL BE ERASED!\n\
#\n\
# This file must *NOT* be checked into Version Control Systems,\n\
# as it contains information specific to your local configuration.\n\
#\n\
# Location of the SDK. This is only used by Gradle.\n\
# For customization when using a Version Control System, please read the\n\
# header note.\n\
#Fri Mar 13 13:44:37 PDT 2015\n\
' + pathToSDK;



exports.settings = "include ':app'";


exports.build_gradle = 'apply plugin: \'com.android.application\'\n\
\n\
android {\n\
    compileSdkVersion 21\n\
    buildToolsVersion "21.1.2"\n\
\n\
    defaultConfig {\n\
        applicationId "com.' + argv.user.toLowerCase() + '.' + argv.proj.toLowerCase() + '"\n\
        minSdkVersion 15\n\
        targetSdkVersion 21\n\
        versionCode 1\n\
        versionName "1.0"\n\
    }\n\
    buildTypes {\n\
        release {\n\
            minifyEnabled false\n\
            proguardFiles getDefaultProguardFile(\'proguard-android.txt\'), \'proguard-rules.pro\'\n\
        }\n\
    }\n\
}\n\
\n\
dependencies {\n\
    compile fileTree(dir: \'libs\', include: [\'*.jar\'])\n\
    compile \'com.android.support:appcompat-v7:21.0.3\'\n\
}';


