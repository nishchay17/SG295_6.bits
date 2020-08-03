import 'package:flutter/material.dart';
import 'package:flutter_app/app_screens/personalised.dart';
import 'package:http/http.dart' ;
import 'dart:convert';
class log extends StatefulWidget{
  @override
  State<StatefulWidget> createState() {
    return log1();
  }
}
class log1 extends State<log>{
  String username;
 String password;
 final GlobalKey<FormState> _formkey = GlobalKey<FormState>();
var convertedjson;
String token;
String id;
 void makePostRequest() async {

   final uri = 'https://sihbackend2020.herokuapp.com/users/login';
   final headers = {'Content-Type': 'application/json'};
   final body = {
     "username": "$username",
     "password":"$password"
   };
   String jsonBody = json.encode(body);
   final encoding = Encoding.getByName('utf-8');

   Response response = await post(
     uri,
     headers: headers,
     body: jsonBody,
     encoding: encoding,
   );
   int statuscode=response.statusCode;
   convertedjson =json.decode(response.body);
   print(statuscode);
     print(convertedjson);
     if(convertedjson['success']==true)
       {
         token=convertedjson['token'];
       if(convertedjson['id2']==null)
         id=convertedjson['authorId'];
       else
         id=convertedjson['id2'];
         Navigator.push(context, new MaterialPageRoute(builder: (context) => new p(token,id)));

       }
 }

 Widget buildusername() {
   return TextFormField(
     decoration: InputDecoration(labelText: 'Username'),
     validator: (var value) {
       if (value.isEmpty) {
         return ('Username is required');
       }
     },
     onSaved: (var value) {
       username = value;
     },
   );
 }

 Widget buildpassword() {
   return TextFormField(
     decoration: InputDecoration(labelText: 'Password'),
     validator: (var value) {
       if (value.isEmpty) {
         return ('Password is required');
       }
     },
     onSaved: (var value) {
       password = value;
     },
   );
 }


 @override
  Widget build(BuildContext context) {

   return Scaffold(
     appBar: AppBar(title: Text("User Sign in"),
     ),
     body: Container(
       margin: EdgeInsets.all(15.0),
       child: Form(
           key: _formkey,
           child: Column(
             mainAxisAlignment: MainAxisAlignment.center,
             children: <Widget>[
               buildusername(),
               buildpassword(),
               SizedBox(height: 5),
               RaisedButton(
                 color: Colors.deepOrange,
                 elevation: 6.0,
                 child: Text("Login"),
                 onPressed: () {
                   if (!_formkey.currentState.validate()) {
                     return;
                   }
                   _formkey.currentState.save();
                   makePostRequest();
                 })

             ],
           )),

     ),
   );
 }

}