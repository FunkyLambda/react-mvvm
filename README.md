# react-mvvm
A demo project with an MVVM implementation in React (Native)

# MVVM explained

The only way to explain the benefit of MVVM (or anything really) is to first start without it and show the motivation for it. So let's do just that...

Let's look at the typical fate of any React view without MVVM.
You do not need to pay much attention to the specifics of the code below; simply note how you have to scroll a bit before you get to the actual rendering of any JSX.
```
import React, { useState } from 'react';

const UserInformationForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showCheckbox, setShowCheckbox] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleUpdate = () => {
    // You can perform any action with the updated state values here
    const updatedUserData = { name, age, subscribed };
    setUserData(updatedUserData);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
    setShowCheckbox(parseInt(e.target.value, 10) >= 18);
  };

  const handleToggleSubscription = () => {
    setSubscribed(!subscribed);
  };

  const handleClearForm = () => {
    setName('');
    setAge('');
    setSubscribed(false);
    setShowCheckbox(false);
    setUserData(null);
  };

  const handleSubmitForm = () => {
    // Simulating form submission
    alert('Form Submitted!');
  };

  return (
    <div>
      <h2>User Information Form</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" value={age} onChange={handleAgeChange} />
      </label>
      <br />

      {showCheckbox && (
        <label>
          Subscribed:
          <input
            type="checkbox"
            checked={subscribed}
            onChange={(e) => setSubscribed(e.target.checked)}
          />
        </label>
      )}

      <br />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleToggleSubscription}>Toggle Subscription</button>
      <button onClick={handleClearForm}>Clear Form</button>

      <br />
      <button onClick={handleSubmitForm}>Submit Form (Simulated)</button>

      {userData && (
        <div>
          <h2>User Data</h2>
          <p>Name: {userData.name}</p>
          <p>Age: {userData.age}</p>
          <p>Subscribed: {userData.subscribed ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
};

export default UserInformationForm;
```

It is easy to let this carry on and end up with views that are even worse, where you potentially have to scroll pages before actually getting to any rendering.

This results in views that are tightly coupled to logic, making it difficult to: separate pure rendering from logic, refactor, or unit-test.

A typical React app would be an example of a MV (Model View) type pattern, where you have your POJO models (e.g., `UserSetting`), and Views (e.g., `UserSettingsView`) that take information from the models and present it, ALONG with all view-specific logic to handle things like user interaction, dynamic updates, etc.

Looking at the view above, it only really ought to contain rendering of JSX, AND NOTHING ELSE. So things like hooks, callback functions, variables, basically ANYTHING concerned with logic, ought to be somewhere else. But where? Well it can't go in a Model (e.g., `UserSetting`), because models are POJOs. And we're tying to take it out of the view so it obviously can't go there. The answer: they go in the ViewModel.

Enter MVVM (Model View ViewModel).

# Running the app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

You may need to refresh the browser upon making any code changes.
