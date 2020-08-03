import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_app/app_screens/first_screen.dart';
import 'package:http/http.dart';
import 'package:shared_preferences/shared_preferences.dart';

class scard extends StatefulWidget{
  final Scheme s2;
  String token;
  String id;
  scard(this.s2,this.id,this.token);
  @override
  scard1 createState() => scard1(s2,id,token);


}
class scard1 extends State<scard>{
  final Scheme s1;
  String token;
  String id;
  String schemeid;
  scard1(this.s1,this.id,this.token){
    schemeid=s1.sid;
  }

  BoxDecoration myboxdecoration(){
    return BoxDecoration(border: Border.all(width: 1));
  }
  void apply() async{
    final uri='https://sihbackend2020.herokuapp.com/apply/$schemeid';
    final Map<String,String>header={
      HttpHeaders.authorizationHeader:"Bearer $token"
    };
    var data =
    await get(uri,
        headers: header);
    var jsondata= json.decode(data.body) ;
    print(jsondata);
    int statuscode=data.statusCode;
    print(statuscode);
  }
  Widget check(){ if(token==null)
  return Container(color: Colors.white,);
  else
  return RaisedButton(
    onPressed: (){
      apply();
    },
    elevation: 6.0,
    color: Colors.deepOrange,
    child: Text("Apply"),
  );}
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Scheme Details"),),
      body: Column(
        children:<Widget> [Container(
          height: 500,
          margin: EdgeInsets.only(left: 15,top: 30,right: 15,bottom: 5),
        decoration: myboxdecoration(),
          child: ListView(
            children: <Widget>[
              Container(
                decoration: myboxdecoration(),
                height: 72,
                child: Row(
                  children: <Widget>[
                    Expanded(child:Text("Name:",
                    style: TextStyle(fontSize: 20),),),
                    Expanded(child: Text(s1.name,
                    style: TextStyle(fontSize: 20),),)
                  ],
                ),

              ),
              Container(
                decoration: myboxdecoration(),
                height: 55,
                child: Row(
                  children: <Widget>[
                    Expanded(child:Text("Type:",
                      style: TextStyle(fontSize: 20),),),
                    Expanded(child: Text(s1.stype,
                      style: TextStyle(fontSize: 20),),)
                  ],
                ),

              ),
              Container(
                decoration: myboxdecoration(),
                height: 55,
                child: Row(
                  children: <Widget>[
                    Expanded(child:Text("Eligibility Caste:",
                      style: TextStyle(fontSize: 18),),),
                    Expanded(child: Text(s1.scast,
                      style: TextStyle(fontSize: 18),),)
                  ],
                ),

              ),
              Container(
                decoration: myboxdecoration(),
                height: 55,
                child: Row(
                  children: <Widget>[
                    Expanded(child:Text("Eligibility Gender:",
                      style: TextStyle(fontSize: 18),),),
                    Expanded(child: Text(s1.sgender,
                      style: TextStyle(fontSize: 18),),)
                  ],
                ),

              ),
              Container(
                decoration: myboxdecoration(),
                height: 55,
                child: Row(
                  children: <Widget>[
                    Expanded(child:Text("Age Group:",
                      style: TextStyle(fontSize: 18),),),
                    Expanded(child: Text((s1.slowerbound),
                      style: TextStyle(fontSize: 18),),),
                    Expanded(child: Text(" to ",
                    style: TextStyle(fontSize: 18),),),
                    Expanded(child: Text(s1.supperbound,
                    style: TextStyle(fontSize: 18),),)
                  ],
                ),

              ),
              Container(
                decoration: myboxdecoration(),
                height: 55,
                child: Row(
                  children: <Widget>[
                    Expanded(child:Text("Eligibility Income:",
                      style: TextStyle(fontSize: 18),),),
                    Expanded(child: Text(s1.sincome,
                      style: TextStyle(fontSize: 18),),)
                  ],
                ),

              ),
              Container(
                decoration: myboxdecoration(),
                height: 150,
                child: Row(
                  children: <Widget>[
                    Expanded(child:Text("Desccription:",
                      style: TextStyle(fontSize: 16),),),
                    Expanded(child: Text(s1.description,
                      style: TextStyle(fontSize: 16),),)
                  ],
                ),

              ),

            ],
          ),
        ),
        check()
      ]),
    );
  }

 }