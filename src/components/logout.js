import firebase from "firebase/compat/app";

const Logout = () => {
  localStorage.clear();
  firebase
    .auth()
    .signOut()
    .then(function () {
      window.location.assign("https://accounts.google.com/logout");
    })
    .catch(function (error) {});
};

export default Logout;
