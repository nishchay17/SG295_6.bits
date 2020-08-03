import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter_app/app_screens/first_screen.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:flutter_app/app_screens/personalised.dart';
import 'dart:io';
import 'package:flutter/foundation.dart';
 void main()
 {
   FlutterError.onError = (FlutterErrorDetails details) {
     FlutterError.dumpErrorToConsole(details);
     if (kReleaseMode)
       exit(1);
   };
   runApp(MaterialApp(debugShowCheckedModeBanner: false,
     theme:new ThemeData(primaryColor: Color.fromRGBO(58, 66, 86, 1.0)),
       title: "Exploring UI widgets",
     home:decide()
   ));
 }
 class decide extends StatelessWidget{
  String token;
  String id;
   void get() async {

     final prefs = await SharedPreferences.getInstance();
      token = prefs.getString('token') ?? null;
      id= prefs.getString('id') ??null;

 print("Got $token");  }

 @override
  Widget build(BuildContext context) {
     get();
     Timer(Duration(seconds: 3), () {
       print("Have $token");
       print("Have $id");
     });
Timer(Duration(seconds: 1), (){
  if(token==null)
      {
       return Navigator.push(context, new MaterialPageRoute(builder: (context) => new schemes()));
     }
     else
{
  return Navigator.push(context, new MaterialPageRoute(builder: (context) => new p(token,id)));

} });
return Scaffold( appBar: AppBar(),
    body:Container( color: Colors.white,
  child: Center(child:Image.asset('assets/images/logo.jpg'),),
));
   }


}