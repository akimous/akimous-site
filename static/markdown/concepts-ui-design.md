# Concepts - UI Design

## Maximizing usable vertical space

Nowadays, most computers are equipped with a 16:9 screen, some get 21:9 or even wider aspect ration. That makes the vertical space of the screen extremely precious. However, a lot of productivity applications are still using the elements and design principles from the 4:3 era, not making proper use of the "wide" screen. That causes a severe waste of space. 

Take the screenshot of PyCharm for example: you already have the taskbar/dock, plus the title bar occupying the screen estate (assuming you are not in fullscreen mode). PyCharm itself has the following "bars" eating your usable vertical space

- Navigation bar
- Tab bar
- Find / replace bar (this is not shown _by default_, but given how often people use it, I'll take it into the count)
- Breadcrumbs
- Panel toggles
- Status bar

If you also count the menu bar, there're 9 "bars" squeezing into the already limited vertical space.

Akimous tries very hard to preserve vertical space for your content (a.k.a the code) by NOT having multiple bars if they are avoidable. Since horizontal bars are specially wasteful of space on wide screen (they span the full width no matter how little the width they actually require), we try to make the only tool bar multi-functional. The toolbar also doubles as the menu bar, the status bar (which contains git status, notification, cursor position and indentation setting), file path indicator. Akimous let you enjoy largest possible vertical workspace without sacrificing functionality. By moving the "bars" away, you no longer need to code with the monitor rotated 90 degree.

Although most of the *bars* in PyCharm can be hidden, if you hide all of them you will end up with reducet functionality and it will become quite inconvinient. This is not a unique problem of PyCharm, almost all existing IDEs exhibit this to some degree.

* MS office ribbons are even worse
* Merge toolbar/title bar / menu bar / status bar
* Easy hide/show panels
* Unify panel / tab behavior

We recommend you to run Akimous is fullscreen mode for maximum productivity.

* Hide browser tab bar
* App mode

## Color Scheme

I feel dark background color is easier to my eyes. However, I don't want everything to be dark. Thus some UI elements such as context menu and pop-ups are colored in light background, so that our eyes can instantly focus on those elements without them being buried among other static UI components.