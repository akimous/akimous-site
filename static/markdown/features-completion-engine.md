# Feature - Completion Engine

## Background

Using machine learning to improve auto-completion in IDE is an embarrassingly difficult problem. There are products try to predict the few tokens (or even few lines) you're going to write by leveraging language models such as GPT-2 or BERT. However, we believe that this approach *should not* be effective at the first place (in other words, well-written code *should not* be very predictable). The reason is that, if a piece of code you are writing is highly predictable, at least some of the following statements are true:

1. You are writing something identical or similar to what you've already written elsewhere. In this case, you're better just refactor the common parts of the code, instead of letting the predictor repeat that for you.
2. What you are writing is identical or similar to something already written by other people. In this case, you might be better off `pip install` an existing package and `import` that module to do the job for you . Or, less desirably, just copy-paste the code then modify it to fit your need.
3. The programing language has a highly repetitive syntax and a relatively low information density (which is not the case for Python).

The other downside of letting a language model completing code for you is that it sometimes changes your original intent. For example, originally you want to write statement X. However, the completion engine come up with a suggestion of statement Y, which is pretty close what statement X does. Because developers are lazy, he or she may just accept statement Y. This may or may not be a bad thing, but the code written is definitely changed.

In summary, it's embarrassing that we all want an intelligent model to predict and complete the code for developers, but highly predictable code usually means bad software-engineering practices. We are still trying our best to make the auto completion engine work better for developers with good practices in real-world scenario instead of chasing the highest recall rate for completing random code snippets from Github or StackOverflow. But, no matter how good the completion engine is, you should never rely solely on it when you code. Just like that you should never rely solely on the lane departure assist system on your car.

## How to toggle on/off?

