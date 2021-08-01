// let express = require("express");
// let app = express();
let admin = require("firebase-admin");
let serviceAccount = require("./serviceAccount.json");
let OSC = require("osc-js");

// const PORT = process.env.PORT || 3000;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// app.get('/', (req, res) => res.send('Hello World'))ssssssss

// app.listen(PORT, () => {
//     console.log(`Server is running on port : ${PORT}`)
// })

//-------------------- OSC -----------------------

const osc = new OSC({
  plugin: new OSC.DatagramPlugin({ send: { port: 8000, host: "127.0.0.1" } }),
});

osc.on("open", () => {
  // const message = new OSC.Message('/test', 12.221, 'hello')
  // osc.send(message)
  // console.log('send')
});

osc.open();

//-------------------------------------------

// const updateData = async () => {
//   for (let i = 1; i <= 10; i++) {
//     let res = await db
//       .collection("room" + i)
//       .get()
//       .then((querySnapshot) => {
//         team1 = querySnapshot.size;

//         let message = new OSC.Message("/room" + i, querySnapshot.size);
//         osc.send(message);
//         return querySnapshot.size;
//       });
//     await console.log("room" + i + " : " + res);
//   }
//   await console.log("-----------------------");
// };

// setInterval(async () => {
//   await updateData();
// }, 2500);

// const query = db.collection("room1");

// const docRoom1 = db.collection("room1").doc("update")
// const observer1 = docRoom9.onSnapshot(
//   (docSnapshot) => {
//     console.log(`Received doc snapshot ROOM9 : ${docSnapshot.data().value}`);
//     // ...
//   },
//   (err) => {
//     console.log(`Encountered error: ${err}`);
//   }
// );

// const dataRoom1 = db.collection("room1").onSnapshot(
//   (querySnapshot) => {
//     console.log(`room1 ${querySnapshot}`);
//     let message = new OSC.Message("/room1", querySnapshot.size);
//     osc.send(message);
//   },
//   (err) => {
//     console.log(`Encountered error: ${err}`);
//   }
// );

// const dataRoom2 = db.collection("room2").onSnapshot(
//   (querySnapshot) => {
//     console.log(`room2 ${querySnapshot.size}`);
//     let message = new OSC.Message("/room2", querySnapshot.size);
//     osc.send(message);
//   },
//   (err) => {
//     console.log(`Encountered error: ${err}`);
//   }
// );

// const dataRoom3 = db.collection("room3").onSnapshot(
//   (querySnapshot) => {
//     console.log(`room3 ${querySnapshot.size}`);
//     let message = new OSC.Message("/room3", querySnapshot.size);
//     osc.send(message);
//   },
//   (err) => {
//     console.log(`Encountered error: ${err}`);
//   }
// );

// const dataRoom4 = db.collection("room4").onSnapshot(
//   (querySnapshot) => {
//     console.log(`room4 ${querySnapshot.size}`);
//     let message = new OSC.Message("/room4", querySnapshot.size);
//     osc.send(message);
//   },
//   (err) => {
//     console.log(`Encountered error: ${err}`);
//   }
// );

// const dataRoom5 = db.collection("room5").onSnapshot(
//   (querySnapshot) => {
//     console.log(`room5 ${querySnapshot.size}`);
//     let message = new OSC.Message("/room5", querySnapshot.size);
//     osc.send(message);
//   },
//   (err) => {
//     console.log(`Encountered error: ${err}`);
//   }
// );

// //-------------------------------------------------

// const dataRoom6 = db.collection("room6").onSnapshot(
//   (querySnapshot) => {
//     console.log(`room6 ${querySnapshot.size}`);
//     let message = new OSC.Message("/room6", querySnapshot.size);
//     osc.send(message);
//   },
//   (err) => {
//     console.log(`Encountered error: ${err}`);
//   }
// );

// const dataRoom7 = db.collection("room7").onSnapshot(
//   (querySnapshot) => {
//     console.log(`room7 ${querySnapshot.size}`);
//     let message = new OSC.Message("/room7", querySnapshot.size);
//     osc.send(message);
//   },
//   (err) => {
//     console.log(`Encountered error: ${err}`);
//   }
// );

// const dataRoom8 = db.collection("room8").onSnapshot(
//   (querySnapshot) => {
//     console.log(`room8 ${querySnapshot.size}`);
//     let message = new OSC.Message("/room8", querySnapshot.size);
//     osc.send(message);
//   },
//   (err) => {
//     console.log(`Encountered error: ${err}`);
//   }
// );

// const dataRoom9 = db.collection("room9").onSnapshot(
//   (querySnapshot) => {
//     console.log(`room9 ${querySnapshot.size}`);
//     let message = new OSC.Message("/room9", querySnapshot.size);
//     osc.send(message);
//   },
//   (err) => {
//     console.log(`Encountered error: ${err}`);
//   }
// );

// const dataRoom10 = db.collection("room10").onSnapshot(
//   (querySnapshot) => {
//     console.log(`room10 ${querySnapshot.size}`);
//     let message = new OSC.Message("/room10", querySnapshot.size);
//     osc.send(message);
//   },
//   (err) => {
//     console.log(`Encountered error: ${err}`);
//   }
// );

const docRoom1 = db.collection("room1").doc("update").onSnapshot(
  (docSnapshot) => {
    let data = docSnapshot.data().population;
    console.log(`Received doc snapshot room1 : ${data}`);
    let message = new OSC.Message("/room1", data);
    osc.send(message);
  },
  (err) => {
    console.log(`Encountered error: ${err}`);
  }
);

const docRoom2 = db.collection("room2").doc("update").onSnapshot(
  (docSnapshot) => {
    let data = docSnapshot.data().population;
    console.log(`Received doc snapshot room2 : ${data}`);
    let message = new OSC.Message("/room2", data);
    osc.send(message);
  },
  (err) => {
    console.log(`Encountered error: ${err}`);
  }
);

const docRoom3 = db.collection("room3").doc("update").onSnapshot(
  (docSnapshot) => {
    let data = docSnapshot.data().population;
    console.log(`Received doc snapshot room3 : ${data}`);
    let message = new OSC.Message("/room3", data);
    osc.send(message);
  },
  (err) => {
    console.log(`Encountered error: ${err}`);
  }
);

const docRoom4 = db.collection("room4").doc("update").onSnapshot(
  (docSnapshot) => {
    let data = docSnapshot.data().population;
    console.log(`Received doc snapshot room4 : ${data}`);
    let message = new OSC.Message("/room4", data);
    osc.send(message);
  },
  (err) => {
    console.log(`Encountered error: ${err}`);
  }
);

const docRoom5 = db.collection("room5").doc("update").onSnapshot(
  (docSnapshot) => {
    let data = docSnapshot.data().population;
    console.log(`Received doc snapshot room5 : ${data}`);
    let message = new OSC.Message("/room5", data);
    osc.send(message);
  },
  (err) => {
    console.log(`Encountered error: ${err}`);
  }
);

const docRoom6 = db.collection("room6").doc("update").onSnapshot(
  (docSnapshot) => {
    let data = docSnapshot.data().population;
    console.log(`Received doc snapshot room6 : ${data}`);
    let message = new OSC.Message("/room6", data);
    osc.send(message);
  },
  (err) => {
    console.log(`Encountered error: ${err}`);
  }
);

const docRoom7 = db.collection("room7").doc("update").onSnapshot(
  (docSnapshot) => {
    let data = docSnapshot.data().population;
    console.log(`Received doc snapshot room7 : ${data}`);
    let message = new OSC.Message("/room7", data);
    osc.send(message);
  },
  (err) => {
    console.log(`Encountered error: ${err}`);
  }
);

const docRoom8 = db.collection("room8").doc("update").onSnapshot(
  (docSnapshot) => {
    let data = docSnapshot.data().population;
    console.log(`Received doc snapshot room8 : ${data}`);
    let message = new OSC.Message("/room8", data);
    osc.send(message);
  },
  (err) => {
    console.log(`Encountered error: ${err}`);
  }
);

const docRoom9 = db.collection("room9").doc("update").onSnapshot(
  (docSnapshot) => {
    let data = docSnapshot.data().population;
    console.log(`Received doc snapshot room9 : ${data}`);
    let message = new OSC.Message("/room9", data);
    osc.send(message);
  },
  (err) => {
    console.log(`Encountered error: ${err}`);
  }
);

const docRoom10 = db.collection("room10").doc("update").onSnapshot(
  (docSnapshot) => {
    let data = docSnapshot.data().population;
    console.log(`Received doc snapshot room10 : ${data}`);
    let message = new OSC.Message("/room10", data);
    osc.send(message);
  },
  (err) => {
    console.log(`Encountered error: ${err}`);
  }
);
