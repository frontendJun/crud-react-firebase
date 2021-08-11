import EditorJs from 'react-editor-js'
import { EDITOR_JS_TOOLS } from './components/constanse';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { firebase } from './firebase';
import { useLocation } from 'react-router-dom';



const Editor = () =>   
{ const [error, setError] = useState(null);
  const [dat, setDat]=useState([])
    let location=useLocation()

    const onClick = async () =>{ (await instanceRef.current.save())
          console.log([])
    };
    
  // const [locc, setLoc ]=useState(location.pathname.substr(6))



  useEffect(() => {

		(async () => {

			try {

				docRef.get().then((doc) => {
          if (doc.exists) {
              setDat(doc.data());
              const datam = doc.data();
              const {blocks}=datam
              console.log(doc.data());

              
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      })

        

			} catch (error) {

				console.error(error);

			}

      const timer = setTimeout(() => {
        const chesk = false
      }, 5000);
    
		})();

	}, []);
   // const { id, name } = tarea;
   const instanceRef = React.useRef(null);

   const handleSave = async e => {
      const db = firebase.firestore();
             await db.collection('tareas').doc(location.state.id).update(
              await instanceRef.current.save()
            );
            const dataEdit =await instanceRef.current.save();
     const result=await fetch('https://webhook.site/e2d9d8a9-e239-46cf-91dd-e939661c7e4b', {
       method: 'POST',
       mode: 'no-cors',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({dataEdit})
     })
     console.log(result);

            

          }
          const db = firebase.firestore();
          var docRef = db.collection("tareas").doc(location.state.id);


   if (dat.length === 0) return (<>загрузка</>)
  return (
    <React.Fragment>
    
        
        <button onClick={handleSave}>Save!</button>
        
        
        
      <EditorJs  
      
      
      
      instanceRef={instance => (instanceRef.current = instance)}
      
     
       
      i18n={{
        messages: {}
      }}
      data={dat}
      tools={EDITOR_JS_TOOLS}
      
        />;     
       
    </React.Fragment>
  );
}

export default Editor;