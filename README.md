# User Referral

> A simple user referral system built with React and Ruby on Rails

User can share there referral link or send a referral email and track count of total successful referals and there names.

## Built With

- Ruby on Rails
- React

## Getting Started

### Prerequisites

- Ruby 3.0.1
- Rails 7
- MySQL
- NodeJS > 18x
- yarn
### Setup

Clone this repo and enter the directory.

```sh
git clone https://github.com/kapilpdev/user-referral.git && cd user-referral
```

### Install

Run the following command to install all the dependencies.

```sh
bundle install
```

### Database Configuration

You need to add the configuration in `database.yml` according to your local mysql database setup.
### Usage

Run the following command to start the server, then go to http://localhost:3000

```sh
bin/setup # check bundler, create and migration database and install yarn dependencies

bin/dev # to start the server

```

### NOTE
Right now this application only works in development mode, invitations mail can be see from the terminal, if you need to change the URL it will be part of a manual process for both the frontend and backend.

## UI Example
![User Referrals](/app/assets/images/collage.jpg?raw=true "User Referrals")

## API REQUEST EXAMPLES

#### Sign Up
```
URL without referral: http://localhost:3000/users
URL with referral: http://localhost:3000/users?referral_token={unique invitation token}
Method: POST
```
Request example:-
```json
{
  "user": {
   "email": "user@test.com",
   "password": "password",
   "password_confirmation": "password",
  }
}
```

#### Sign In
```
URL: http://domain.com/api/auth/sign_in
Method: POST
```
Request example:
```json
{
  "user": {
    {
      "email": "user@test.com",
      "password": "password"
    }
  }
}
```

### Authentication headers example for all further queries
``` "Authorization": "wwwww" ```
When doing login and signup you will get token in response that you need to pass in Authorization key in request headers.

#### Referrals of current_user
```
URL: http://localhost:3000/referrals_invitations
Method: GET
```

#### Send invite email
```
URL: http://localhost:3000/referrals_invitations
Method: POST
```
Request example:
```json
{
  "referral_invitation": {
    "email": "name@domain.com"
  }
}
```

## Author

**kapil Patel**

- GitHub: [@kapilpdev](https://github.com/kapilpdev)
