### 1. Download

There are 2 options for those using [Github Pages](https://pages.github.com/).

- A. If you want to use your root `username.github.io` as your repo, fork this repo and rename it to `username.github.io`. So when adding it in Cydia, use `https://username.github.io`.

- B. If you want to use a subfolder for your existing `username.github.io` as your repo (example `username.github.io/repo`), fork this repo and rename it to `repo`. So when adding it in Cydia, use `https://username.github.io/repo`.

You can change `repo` to anything you want, like `cydia` for example. So your repo url would be `https://username.github.io/cydia`.

***
### 2. Personalize

Edit `Release` file. Modify the items pointed by `<--`

    Origin: Reposi3  <--
    Label: Reposi3   <--
    Suite: stable
    Version: 1.0
    Codename: ios
    Architectures: iphoneos-arm
    Components: main
    Description: Reposi3 - a cydia repo template  <--

**Branding**

Edit `index.html`
* Change the page title in the `<title>Reposi3</title>` tag
* See lines 20 and 21.
* Change line 20 into your own **brand** and line 21 to have your own URL.
* Line2 30-51 contains the list of featured packages. You can edit those or remove them totally.
* Replace CydiaIcon.png.
