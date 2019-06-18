# PerFi - Personal Finance Application

Members: 

* Phạm Lê Duy - B15DCAT058
* Nguyễn Văn Hiệu - B15DCAT074
* Nguyễn Minh Đức - B15DCAT046

Report:

* [Link Report](./Bao%20Cao%20Ung%20Dung.docx)
## Bootstrap Project
1. Install npm or yarn 
2. Run

```
yarn
# or
npm
```

## Run App

### On Android

```
npm run android
or
yarn android 
```

Open the app in the iOS Simulator if you're on a Mac and have it installed.

### On iOS

```
npm run ios
or
yarn ios 
``` 

Open the app on a connected Android device or emulator, to start an Android emulator, see below.

#### Manage Android Emulators`

* Install avd if you don't have, if you are having Android Studio installed, you may have it already.
* Install adb (https://developer.android.com/studio/command-line/adb)

##### List all AVD (Android Vitual Device/Emulators)
```
cd C:\Users\duyph\AppData\Local\Android\Sdk\tools\bin && avdmanager list avd
```
##### Turn on an AVD
```
cd C:\Users\duyph\AppData\Local\Android\Sdk\tools && emulator -avd Nexus_5_Edited_1_API_26
```
