import firebase from "../config/firebaseConfig";

class Api {
  loginUser(user) {
    const { email, password } = user;
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  logoutUser() {
    return firebase.auth().signOut();
  }

  registerUser(user) {
    const { email, password } = user;
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  getEmployee() {
    // console.warn("API");
    // return firebase
    //   .database()
    //   .ref("/employee")
    //   .once("value")
    //   .then(function (snapshot) {
    //     console.warn(snapshot.val());
    //   });
    // let data = {
    //   name: "Los Angeles",
    //   state: "CA",
    //   country: "USA",
    // };

    // // Add a new document in collection "cities" with ID 'LA'
    // firebase.database().ref().collection("employee").doc("LA").set(data);
    return fetch("https://test-ukeess.firebaseio.com/employee").then((res) => {
      console.warn(res);
    });
  }
}

export default new Api();
