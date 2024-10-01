# Welcome to the Motoko Tutorial

In this tutorial, you will learn the fundamental principles of the Motoko programming language and how to utilize it to develop programs on the Internet Computer.
\
## What is the Internet Computer?

The Internet Computer is a decentralized blockchain initiative developed by the DFINITY Foundation. The objective of this project is to provide a platform that hosts smart contracts and data in a decentralized manner. Notably, the Internet Computer allows the entirety of an application, including its user interface, to be hosted on the blockchain.
\
## What is Motoko?

Motoko is a programming language specifically designed for the Internet Computer. It incorporates all the standard features expected of a modern programming language, such as strong typing, automatic memory management, generics, and type inference, among others.

For concurrency, Motoko employs the actor model, a computational framework for concurrent and distributed systems. Each actor represents an autonomous entity that encapsulates both state and behavior, communicating with other actors solely through asynchronous message passing. Further details regarding actors will be provided later in the tutorial.

Motoko is compiled into WebAssembly, which is subsequently executed by the Internet Computer's virtual machine. Consequently, while Motoko is not the sole language suitable for writing smart contracts for the Internet Computer, it has been specifically designed with the platform's requirements in mind, rendering it the preferred language for such applications.
\
## How to Use This Tutorial

This tutorial comprises a series of small exercises, each designed to teach a new concept of the Motoko language. Each exercise consists of a brief program that you can execute and experiment with. Subsequent exercises build upon the knowledge acquired in previous ones; therefore, it is advisable to proceed through them sequentially. If you are already familiar with Motoko or wish to learn about a specific feature, you are welcome to skip to any exercise of your choosing.
