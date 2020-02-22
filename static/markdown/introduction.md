# Introduction

## Objective differences between Akimous and Visual Studio Code

* Akimous will only focus on Python language for now. We don't mean to be the next Sublime, VS Code, or the like of general-purpose editors.
* Akimous will not optimize for very large text files, because
  - If you have a big `.py` file that's big enough to cause performance issue to the editor, you had better just refactor it.
  - Akimous doet not mean to be a general-purpose for you to read jumbo log files, etc.
* Akimous doesn't run Node or Electron; it is designed to be able to run in any modern browser over the network.
* Akimous focus more on features that can boost developer productivity instead of generic editor features. For example, we'll prioritize providing more accurate and useful completion instead of lower input latency.
* Akimous prioritize built-in features instead of relying on exxtensions to providing functionality, because
  - Editors rely on extensions are less likely to have a good out-of-the-box experience.
  - It is hard to ask all extensions to work in a cooperative manner. They may fight each other, conflict on hotkeys and slow down the editor. And the users are likely to blame the editor for the suboptimal experience caused by third-party extensions.