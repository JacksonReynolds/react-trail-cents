# React-Redux Trail Cents Project

## Overview

This is the repository for my React-Redux Trail Cents project for Flatiron School. This is a platform that incentivizes users to participate in volunteer events. This in turn, earns the user rewards, which they can redeem for rewards. The code implements a React frontend framework using a Redux store, that interfaces with a Rails API created for this application. Enjoy

## Pre-requisites

Make sure that you have installed bundler. You can check this by running `gem install bundler` from your root directory in the terminal.

## Install

Once you have cloned this repository, cd into the backend directory from the app parent directory and run `bundler install`. After that, run `rake db:migrate`, `rake db:seed` to make sure the database is set up. This will seed the database with some events and rewards. Feel free to add users to the seed file as well, making sure you add the necessary attributes based on the validations in the User model, otherwise they won't save!

Make sure to navigate to the forntend directory and run `npm install` as well, to make sure the dependencies for React and Redux are installed.

## Running the App

In the terminal, start the rails server (`rails s`). Then, navigate to the frontend directory in the parent directory of the app. From the frontend directory, run `PORT=3001 npm start`. This will start a server to run the frontend code, and will make sure it is not utilizing the same port as the backend server. 

DISCLAIMER: This app is designed for demonstration. The rewards and events are not based on actual rewards or events.

## Contributors Guide

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

Jackson Reynolds - [GitHub](https://github.com/JacksonReynolds)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

