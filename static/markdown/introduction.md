# Introduction

## Why yet another IDE? Why don't you build it to be a VSCode or PyCharm extension?

We believe a good IDE can dramatically improve developers' productivity. The word *good* here covers a lot of aspects of an IDE: be an effective completion engine, a pleasing visual design, reasonable and easy-to-remember key-bindings, or nicely supported toolchain integration, etc. Although VSCode and PyCharm are mature and proven products, we want to deliver something built with fundamentally different concepts and great out-of-the-box experience, opposed to a plug-in for existing platforms.

Here are many reasons preventing us from providing the functionality we want while shipping it as an extension. Simply put, we don't like some of the decisions the existing IDEs made.  (I don't blame them for those decisions. After all, they need to maintain some backward compatibility and make users coming from other editors feel at home.) If we are to tweak the way those IDEs work by extensions to match the taste of ours, those extensions are likely to

- conflict with some of the original design of the editors
- break some basic functionality of the editor
- conflict with other existing extensions

Therefore it might be a better idea to implement those concepts in a new IDE from ground up. However I don't mind if someone who is interested in some of the ideas of Akimous and port them to other editors (either as native feature or as plug-ins).

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