# React Native FlatList Performance Issue: Missing Unique Keys

This repository demonstrates a common performance problem in React Native's FlatList component: the lack of unique keys for list items.  Improper key extraction can lead to slow rendering, particularly with large datasets, and may cause crashes.

## The Problem

When using FlatList, each item *must* have a unique key.  Without unique keys, React Native cannot efficiently update the list.  This results in suboptimal rendering performance and potential instability.

## The Solution

The solution involves using the `keyExtractor` prop of FlatList, providing a function that returns a unique key for each item in your data array.

## How to Use

1. Clone this repository.
2. Navigate to the directory in your terminal.
3. Run `npm install` to install the necessary dependencies.
4. Run `npx react-native run-android` or `npx react-native run-ios` to run the app in an emulator or device.
5. Observe the performance improvement of the improved FlatList implementation in `bugSolution.js`