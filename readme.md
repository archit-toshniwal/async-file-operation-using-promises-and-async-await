#In Order to Use this Module inside your Project

Prequesites

* import/require Module

* create a folder in your directory

* while calling method inside module use  then-catch/async-await method will return promise

* Before Calling Each Method you should pass the given arguments strictly

* For Insertion in File
  
  -> InsertMessage("directoryPath","foldername","fileName","message")
        .then((data)=>console.log(data))
        .catch((error)=>console.log(error));

* For Appending in File


  -> AppendMessage("directoryPath","foldername","fileName","message")
        .then((data)=>console.log(data))
        .catch((error)=>console.log(error));

* For Reading Content in File


  -> ReadMessage("directoryPath","foldername","fileName")
        .then((data)=>console.log(data.toString()))
        .catch((error)=>console.log(error));

