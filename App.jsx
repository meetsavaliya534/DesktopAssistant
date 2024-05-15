// // // // import React, { useState } from 'react';
// // // // import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

// // // // export default function App() {
// // // //   const [name, setName] = useState('');
// // // //   const [customMessage, setCustomMessage] = useState('');
// // // //   const [speech, setSpeech] = useState('');

// // // //   const generateSpeech = async () => {
// // // //     try {
// // // //       const response = await fetch('http://192.168.81.125:5000/generate_speech', {
// // // //         method: 'POST',
// // // //         headers: {
// // // //           'Content-Type': 'application/json'
// // // //         },
// // // //         body: JSON.stringify({ name, message: customMessage })
// // // //       });
// // // //       const data = await response.json();
// // // //       setSpeech(data.message);
// // // //     } catch (error) {
// // // //       console.error('Error generating speech:', error);
// // // //     }
// // // //   };

// // // //   const updateWelcomeMessage = async () => {
// // // //     try {
// // // //       const response = await fetch('http://192.168.81.125:5000/update_welcome_message', {
// // // //         method: 'POST',
// // // //         headers: {
// // // //           'Content-Type': 'application/json'
// // // //         },
// // // //         body: JSON.stringify({ message: customMessage })
// // // //       });
// // // //       const data = await response.json();
// // // //       console.log(data.message);
// // // //     } catch (error) {
// // // //       console.error('Error updating welcome message:', error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <Text style={styles.title}>Generate Speech</Text>
// // // //       <TextInput
// // // //         style={styles.input}
// // // //         placeholder="Enter your name"
// // // //         value={name}
// // // //         onChangeText={setName}
// // // //       />
// // // //       <TextInput
// // // //         style={styles.input}
// // // //         placeholder="Enter custom welcome message"
// // // //         value={customMessage}
// // // //         onChangeText={setCustomMessage}
// // // //       />
// // // //       {customMessage ? (
// // // //         <View style={styles.buttonContainer}>
// // // //           <Button title="Generate Speech" onPress={generateSpeech} />
// // // //           <Button title="Update Message" onPress={updateWelcomeMessage} />
// // // //         </View>
// // // //       ) : (
// // // //         <Button title="Generate Speech" onPress={generateSpeech} />
// // // //       )}
// // // //       {speech ? <Text style={styles.speech}>{speech}</Text> : null}
// // // //     </View>
// // // //   );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: '#fff',
// // // //     alignItems: 'center',
// // // //     justifyContent: 'center',
// // // //     paddingHorizontal:20,
// // // //   },
// // // //   title: {
// // // //     fontSize: 24,
// // // //     marginBottom: 20,
// // // //   },
// // // //   input: {
// // // //     width: '100%',
// // // //     height: 40,
// // // //     borderWidth: 1,
// // // //     borderColor: '#ccc',
// // // //     borderRadius: 5,
// // // //     paddingHorizontal: 10,
// // // //     marginBottom: 20,
// // // //   },
// // // //   speech: {
// // // //     marginTop: 20,
// // // //     fontSize: 18,
// // // //     textAlign: 'center',
// // // //   },
// // // //   buttonContainer: {
// // // //     flexDirection: 'row',
// // // //     justifyContent: 'space-between',
// // // //     width: '100%',
// // // //   },
// // // // });
// // // import React, { useState } from 'react';
// // // import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
// // // import axios from 'axios'; // Import Axios for making HTTP requests

// // // export default function App() {
// // //   const [name, setName] = useState('');
// // //   const [customMessage, setCustomMessage] = useState('');
// // //   const [speech, setSpeech] = useState('');

// // //   const generateSpeech = async () => {
// // //     try {
// // //       const response = await axios.post('http://192.168.81.125:5000/generate_speech', { name, message: customMessage });
// // //       const data = response.data;
// // //       setSpeech(data.message);
// // //     } catch (error) {
// // //       console.error('Error generating speech:', error);
// // //     }
// // //   };

// // //   const updateWelcomeMessage = async () => {
// // //     try {
// // //       const response = await axios.post('http://192.168.81.125:5000/update_welcome_message', { message: customMessage });
// // //       const data = response.data;
// // //       console.log(data.message);
// // //     } catch (error) {
// // //       console.error('Error updating welcome message:', error);
// // //     }
// // //   };

// // //   const handlePCAction = async (action) => {
// // //     try {
// // //       const response = await axios.post(`http://192.168.81.125:5000/${action}`);
// // //       const data = response.data;
// // //       console.log(data.message);
// // //     } catch (error) {
// // //       console.error(`Error ${action} PC:`, error);
// // //     }
// // //   };

// // //   return (
// // //     <View style={styles.container}>
// // //       <Text style={styles.title}>Generate Speech</Text>
// // //       <TextInput
// // //         style={styles.input}
// // //         placeholder="Enter your name"
// // //         value={name}
// // //         onChangeText={setName}
// // //       />
// // //       <TextInput
// // //         style={styles.input}
// // //         placeholder="Enter custom welcome message"
// // //         value={customMessage}
// // //         onChangeText={setCustomMessage}
// // //       />
// // //       {customMessage ? (
// // //         <View style={styles.buttonContainer}>
// // //           <Button title="Generate Speech" onPress={generateSpeech} />
// // //           <Button title="Update Messages" onPress={updateWelcomeMessage} />
// // //         </View>
// // //       ) : (
// // //         <Button title="Generate Speech" onPress={generateSpeech} />
// // //       )}
// // //       {speech ? <Text style={styles.speech}>{speech}</Text> : null}

// // //       {/* PC Control Buttons */}
// // //       <View style={styles.pcControlContainer}>
// // //         <Button title="Shutdown" onPress={() => handlePCAction('shutdown')} />
// // //         <Button title="Restart" onPress={() => handlePCAction('restart')} />
// // //         <Button title="Lock PC" onPress={() => handlePCAction('lock_pc')} />
// // //         <Button title="Sleep PC" onPress={() => handlePCAction('sleep_pc')} />
// // //         <Button title="Wake Up PC" onPress={() => handlePCAction('wake_up_pc')} />
// // //         <Button title="Unlock PC" onPress={() => handlePCAction('unlock_pc')} />
// // //       </View>
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: '#fff',
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     paddingHorizontal: 20,
// // //   },
// // //   title: {
// // //     fontSize: 24,
// // //     marginBottom: 20,
// // //   },
// // //   input: {
// // //     width: '100%',
// // //     height: 40,
// // //     borderWidth: 1,
// // //     borderColor: '#ccc',
// // //     borderRadius: 5,
// // //     paddingHorizontal: 10,
// // //     marginBottom: 20,
// // //   },
// // //   speech: {
// // //     marginTop: 20,
// // //     fontSize: 18,
// // //     textAlign: 'center',
// // //   },
// // //   buttonContainer: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
// // //     width: '100%',
// // //     marginBottom: 20,
// // //   },
// // //   pcControlContainer: {
// // //     flexDirection: 'column',
// // //     justifyContent: 'space-between',
// // //     width: '100%',
// // //   },
// // // });
// // import React, { useState } from 'react';
// // import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
// // import axios from 'axios';

// // export default function App() {
// //   const [name, setName] = useState('');
// //   const [customMessage, setCustomMessage] = useState('');
// //   const [speech, setSpeech] = useState('');
// //   const [pin, setPin] = useState('');


// //   const generateSpeech = async () => {
// //     try {
// //       const response = await axios.post('http://192.168.81.125:5000/generate_speech', { name, message: customMessage });
// //       const data = response.data;
// //       setSpeech(data.message);
// //     } catch (error) {
// //       console.error('Error generating speech:', error);
// //     }
// //   };

// //   const updateWelcomeMessage = async () => {
// //     try {
// //       const response = await axios.post('http://192.168.81.125:5000/update_welcome_message', { message: customMessage });
// //       const data = response.data;
// //       console.log(data.message);
// //     } catch (error) {
// //       console.error('Error updating welcome message:', error);
// //     }
// //   };

// //   const handlePCAction = async (action) => {
// //     try {
// //       const response = await axios.post(`http://192.168.81.125:5000/${action}`);
// //       const data = response.data;
// //       console.log(data.message);
// //     } catch (error) {
// //       console.error(`Error ${action} PC:`, error);
// //     }
// //   };

// //   // Add function to handle unlocking PC
// //   // Add function to handle unlocking PC
// //   const handleUnlockPC = async () => {
// //     try {
// //       console.log('PIN:', pin); // Log the PIN value before sending the request
// //       const response = await axios.post('http://192.168.81.125:5000/unlock_pc', { pin });
// //       const data = response.data;
// //       console.log(data.message);
// //     } catch (error) {
// //       console.error('Error unlocking PC:', error);
// //     }
// //   };


// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Generate Speech</Text>
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Enter your name"
// //         value={name}
// //         onChangeText={setName}
// //       />
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Enter custom welcome message"
// //         value={customMessage}
// //         onChangeText={setCustomMessage}
// //       />
// //       {customMessage ? (
// //         <View style={styles.buttonContainer}>
// //           <Button title="Generate Speech" onPress={generateSpeech} />
// //           <Button title="Update Messages" onPress={updateWelcomeMessage} />
// //         </View>
// //       ) : (
// //         <Button title="Generate Speech" onPress={generateSpeech} />
// //       )}
// //       {speech ? <Text style={styles.speech}>{speech}</Text> : null}

// //       {/* PC Control Buttons */}
// //       <View style={styles.pcControlContainer}>
// //         <Button title="Shutdown" onPress={() => handlePCAction('shutdown')} />
// //         <Button title="Restart" onPress={() => handlePCAction('restart')} />
// //         <Button title="Lock PC" onPress={() => handlePCAction('lock_pc')} />
// //         <Button title="Sleep PC" onPress={() => handlePCAction('sleep_pc')} />
// //         <Button title="Wake Up PC" onPress={() => handlePCAction('wake_up_pc')} />
// //         {/* Add Unlock PC Button */}
// //         <Button title="Unlock PC" onPress={handleUnlockPC} />
// //         <TextInput
// //           style={styles.input}
// //           placeholder="Enter PIN"
// //           value={pin}
// //           onChangeText={setPin}
// //           secureTextEntry={true} // For masking PIN input
// //         />
// //       </View>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     paddingHorizontal: 20,
// //   },
// //   title: {
// //     fontSize: 24,
// //     marginBottom: 20,
// //   },
// //   input: {
// //     width: '100%',
// //     height: 40,
// //     borderWidth: 1,
// //     borderColor: '#ccc',
// //     borderRadius: 5,
// //     paddingHorizontal: 10,
// //     marginBottom: 20,
// //   },
// //   speech: {
// //     marginTop: 20,
// //     fontSize: 18,
// //     textAlign: 'center',
// //   },
// //   buttonContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     width: '100%',
// //     marginBottom: 20,
// //   },
// //   pcControlContainer: {
// //     flexDirection: 'column',
// //     justifyContent: 'space-between',
// //     width: '100%',
// //   },
// // });


// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
// import axios from 'axios';

// export default function App() {
//   const [name, setName] = useState('');
//   const [customMessage, setCustomMessage] = useState('');
//   const [speech, setSpeech] = useState('');
//   const [pin, setPin] = useState('');

//   const generateSpeech = async () => {
//     try {
//       const response = await axios.post('http://192.168.81.125:5000/generate_speech', { name, message: customMessage });
//       const data = response.data;
//       setSpeech(data.message);
//     } catch (error) {
//       console.error('Error generating speech:', error);
//     }
//   };

//   const updateWelcomeMessage = async () => {
//     try {
//       const response = await axios.post('http://192.168.81.125:5000/update_welcome_message', { message: customMessage });
//       const data = response.data;
//       console.log(data.message);
//     } catch (error) {
//       console.error('Error updating welcome message:', error);
//     }
//   };

//   const handlePCAction = async (action) => {
//     try {
//       const response = await axios.post(`http://192.168.81.125:5000/${action}`);
//       const data = response.data;
//       console.log(data.message);
//     } catch (error) {
//       console.error(`Error ${action} PC:`, error);
//     }
//   };

//   // Function to handle unlocking PC
//   const handleUnlockPC = async () => {
//     try {
//       console.log('PIN:', pin); // Log the PIN value before sending the request
//       const response = await axios.post('http://192.168.81.125:5000/unlock_pc', { pin });
//       const data = response.data;
//       console.log(data.message);
//     } catch (error) {
//       console.error('Error unlocking PC:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Generate Speech</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter custom welcome message"
//         value={customMessage}
//         onChangeText={setCustomMessage}
//       />
//       {customMessage ? (
//         <View style={styles.buttonContainer}>
//           <Button title="Generate Speech" onPress={generateSpeech} />
//           <Button title="Update Messages" onPress={updateWelcomeMessage} />
//         </View>
//       ) : (
//         <Button title="Generate Speech" onPress={generateSpeech} />
//       )}
//       {speech ? <Text style={styles.speech}>{speech}</Text> : null}

//       {/* PC Control Buttons */}
//       <View style={styles.pcControlContainer}>
//         <Button title="Shutdown" onPress={() => handlePCAction('shutdown')} />
//         <Button title="Restart" onPress={() => handlePCAction('restart')} />
//         <Button title="Lock PC" onPress={() => handlePCAction('lock_pc')} />
//         <Button title="Sleep PC" onPress={() => handlePCAction('sleep_pc')} />
//         <Button title="Wake Up PC" onPress={() => handlePCAction('wake_up_pc')} />

//         {/* PIN input */}
//         <TextInput
//           style={styles.input}
//           placeholder="Enter PIN"
//           value={pin}
//           onChangeText={setPin}
//           secureTextEntry={true} // For masking PIN input
//         />

//         {/* Unlock PC button */}
//         <Button title="Unlock PC" onPress={handleUnlockPC} />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   speech: {
//     marginTop: 20,
//     fontSize: 18,
//     textAlign: 'center',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginBottom: 20,
//   },
//   pcControlContainer: {
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
// });


import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import axios from 'axios';

export default function App() {
  const [name, setName] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [speech, setSpeech] = useState('');
  const [pin, setPin] = useState('');

  const generateSpeech = async () => {
    try {
      const response = await axios.post('http://192.168.81.125:5000/generate_speech', { name, message: customMessage });
      const data = response.data;
      setSpeech(data.message);
    } catch (error) {
      console.error('Error generating speech:', error);
    }
  };

  const updateWelcomeMessage = async () => {
    try {
      const response = await axios.post('http://192.168.81.125:5000/update_welcome_message', { message: customMessage });
      const data = response.data;
      console.log(data.message);
    } catch (error) {
      console.error('Error updating welcome message:', error);
    }
  };

  const handlePCAction = async (action) => {
    try {
      const response = await axios.post(`http://192.168.81.125:5000/${action}`);
      const data = response.data;
      console.log(data.message);
    } catch (error) {
      console.error(`Error ${action} PC:`, error);
    }
  };

  const handleUnlockPC = async () => {
    try {
      console.log('PIN:', pin);
      const response = await axios.post('http://192.168.81.125:5000/unlock_pc', { pin });
      const data = response.data;
      console.log(data.message);
    } catch (error) {
      console.error('Error unlocking PC:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Generate Speech</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter custom welcome message"
        value={customMessage}
        onChangeText={setCustomMessage}
      />
      {customMessage ? (
        <View style={styles.buttonContainer}>
          <Button title="Generate Speech" onPress={generateSpeech} />
          <Button title="Update Messages" onPress={updateWelcomeMessage} />
        </View>
      ) : (
        <Button title="Generate Speech" onPress={generateSpeech} />
      )}
      {speech ? <Text style={styles.speech}>{speech}</Text> : null}

      {/* PC Control Buttons */}
      <View style={styles.pcControlContainer}>
        <Button title="Shutdown" onPress={() => handlePCAction('shutdown')} />
        <Button title="Restart" onPress={() => handlePCAction('restart')} />
        <Button title="Lock PC" onPress={() => handlePCAction('lock_pc')} />
        <Button title="Sleep PC" onPress={() => handlePCAction('sleep_pc')} />
        <Button title="Wake Up PC" onPress={() => handlePCAction('wake_up_pc')} />
        {/* Add Unlock PC Button */}
        <TextInput
          style={styles.input}
          placeholder="Enter PIN"
          value={pin}
          onChangeText={setPin}
          secureTextEntry={true}
        />
        <Button title="Unlock PC" onPress={handleUnlockPC} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  speech: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  pcControlContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  },
});
