import 'dart:async';
import 'package:flutter/cupertino.dart';
import'package:shared_preferences/shared_preferences.dart';
import 'dart:io';
import 'package:flutter/material.dart';
import 'package:flutter_app/app_screens/schemecard.dart';
import 'package:http/http.dart' ;
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:flutter_app/app_screens/first_screen.dart';
import 'package:flutter_app/app_screens/personalised.dart';
class apl extends StatefulWidget{
  String token;
  String id;
  apl(this.token,this.id);
  @override
  State<StatefulWidget> createState() {
    return apl1(token,id);
  }

}
class apl1 extends State<apl>{
 String token;
 String id;
 apl1(this.token,this.id);
 List<String> sname=["Chief Minister's Free Scholarship Scheme",
 "PM Shram Yogi Maan-dhan","Manodhairya Scheme","Demo1"];
 Future<List<status>> getapplied() async {
   final uri = 'https://sihbackend2020.herokuapp.com/apply/application/$id';
   final Map<String, String>header = {
     HttpHeaders.authorizationHeader: "Bearer $token"
   };
   var data =
   await get(uri,
       headers: header

   );
   var jsondata = json.decode(data.body);
   int statuscode=data.statusCode;
   print(statuscode);
   print(jsondata);

   List<status> status1=[];
   for(var u in jsondata)
   {

   status _status=status(u["state"],u["_id"],u["schemeId"],u["userId"],u["author"]);
     //_status.getname();
     status1.add(_status);
_status.convert();
_status.add(_status.schemeId);
   }
   print(statuscode);
   print(jsondata);
   print(jsondata.length);
   return status1;


 }
 void logout() async{
   final uri='https://sihbackend2020.herokuapp.com/logout';
   final Map<String,String>header={
     HttpHeaders.authorizationHeader:"Bearer $token"
   };
   var data =
   await get(uri,
       headers: header);
   var jsondata= json.decode(data.body) ;
   print(jsondata);
 }

 void del() async{
   final prefs = await SharedPreferences.getInstance();
   prefs.remove('token');
   prefs.remove('id');
 }


 @override
  Widget build(BuildContext context) {
   return Scaffold( appBar: AppBar(title:Text("Applications"),
   ),
       bottomNavigationBar: BottomAppBar(
         color: Color.fromRGBO(58, 66, 86, 1.0),
         child: Row(
           children:<Widget>[
             Expanded(child:RaisedButton(
               color: Colors.grey,
               elevation: 6.0,
               child: Text("Schemes"),
               onPressed: (){
               },
             )),
             Expanded(child:RaisedButton(
               color: Colors.grey,
               elevation: 6,
               child: Text("Sign Out"),
               onPressed: (){
                 logout();
                 del();
                 Navigator.push(context, new MaterialPageRoute(builder: (context) => new schemes()));

               },
             )),
             /*Expanded(child:RaisedButton(
          elevation: 6,
          child: Text("About"),
          onPressed: (){
            Navigator.push(context, new MaterialPageRoute(builder: (context) => new log()));
          },
        )), */
           ],
         ),
       ),

       body:   Container(
         alignment: Alignment.bottomLeft,
         color: Colors.white,
         margin: EdgeInsets.only(left: 5, top: 2),
           child: FutureBuilder(
             future: getapplied(),
             builder:( BuildContext Context, AsyncSnapshot snapshot ){
               if(snapshot.data == null){
                 return Center(
                     child:Text( "Loading...",
                       style: TextStyle(fontSize: 20),
                     )
                 );
               }
               else  return ListView.builder(itemCount: snapshot.data.length,
                   itemBuilder:(BuildContext context,int index ){
                 print(snapshot.data.length);
                  return Padding(
                         padding: const EdgeInsets.all(16.0),
                         child:ListTile (
                           onTap: (){

                             debugPrint("tile pressed");
                           },
                           title:Container(
                               height: 190,
                               color: Colors.white,
                               child:Material(
                                   color: Color.fromRGBO(204, 204, 204, 0.5),
                                   elevation: 5,
                                   borderRadius: BorderRadius.circular(24.0),
                                   //shadowColor: Color(0x802196F3),
                                   child:Column(children:<Widget>[
                                     Text(" "),
                                     Text("Application Status",
                                       style: TextStyle(fontSize: 24),
                                       textAlign: TextAlign.center,
                                     ),
                                     Text(" "),
                                     Text(sname[index],
                                       style: TextStyle(fontSize: 20),
                                     textAlign: TextAlign.center,),
                                     Text(" "),

                                     Text(snapshot.data[index].sstate,
                                     style: TextStyle(fontSize: 20),
                                       textAlign: TextAlign.center,
                                     ),
                                     Text(" ")



                                   ]))

                           ),)

                     );
                   }
               );

             }
         ),
       )
   );

  }

}
class status{
  var state;
  String _id;
  String schemeId;
  String userId;
  String author;
  String sstate;
String name;
  status(this.state,this._id,this.schemeId,this.userId,this.author);
void convert() {
  if (state == 0)
    sstate = "Pending";
  else if(state==1)
    sstate="Done";
  else
    sstate="Rejected";
}
void add(String id3){
  void get() async{
  Response data1 =
      await http.get('https://sihbackend2020.herokuapp.com/schemes/$id3');
  var jsondata1= json.decode(data1.body) ;
  for(var u in jsondata1)
  { name=(u["name"]);
  print(u["name"]);}
  get();
  }
}
}