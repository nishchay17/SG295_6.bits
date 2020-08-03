import'package:shared_preferences/shared_preferences.dart';
import 'dart:io';
import 'package:flutter/material.dart';
import 'package:flutter_app/app_screens/schemecard.dart';
import 'package:http/http.dart' ;
import 'dart:convert';
import 'package:flutter_app/app_screens/first_screen.dart';
import 'package:flutter_app/app_screens/Application.dart';
class p extends StatefulWidget{
  String token;
  String id;
  p(this.token,this.id);
  @override
  State<StatefulWidget> createState() {
    return p1(token,id);
  }

}
class p1 extends State<p>{
  String token;
  String id;
  p1(this.token,this.id);
  Future<List<Scheme>> getResponse() async {
    final uri='https://sihbackend2020.herokuapp.com/apply';
    final Map<String,String>header={
      HttpHeaders.authorizationHeader:"Bearer $token"
    };
    var data =
    await get(uri,
     headers: header);
    var jsondata= json.decode(data.body) ;
    List<Scheme> Schemes=[];
    for(var u in jsondata)
    {
      Scheme _Schemes=Scheme(u["type"], u["eligibilityAgeLowerBound"], u["gender"], u["_id"], u["name"], u["eligibilityIncome"], u["eligibilityCaste"], u["state"], u["eligibilityAgeUpperBound"], u["description"]);
      Schemes.add(_Schemes);
      _Schemes.convert();

    }

    return Schemes;
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
  void save(token) async{final prefs = await SharedPreferences.getInstance();
  print("Saved $token");
  prefs.setString('token', token);
  prefs.setString('id', id);}
  void gett() async {

    final prefs = await SharedPreferences.getInstance();
    final t= prefs.getString('token') ?? null;
    final idd =prefs.getString('id') ??null;
    print("Retrieved id $idd");
    print("Retrieved $t");  }

  void debug()
  {
    debugPrint("buton pressed");
  }
  @override
    Widget build(BuildContext context) {
     print(token);
     print(id);
     save(token);
    gett();
     return Scaffold( appBar: AppBar(title:Text("Home")),
         bottomNavigationBar: BottomAppBar(
           color: Color.fromRGBO(58, 66, 86, 1.0),
           child: Row(
             children:<Widget>[
               Expanded(child:RaisedButton(
                 color: Colors.grey,
                 elevation: 6.0,
                 child: Text("Applications"),
                 onPressed: (){
                   Navigator.push(context, new MaterialPageRoute(builder: (context) => new apl(token, id)));
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
    future: getResponse(),
    builder:( BuildContext Context, AsyncSnapshot snapshot ){
    if(snapshot.data == null){
    return Center(
    child:Text( "Loading...",
    style: TextStyle(fontSize: 20),
    )
    );
    }
    else return ListView.builder(itemCount: snapshot.data.length,
    itemBuilder:(BuildContext context,int index ){
    return Padding(
    padding: const EdgeInsets.all(16.0),
    child:ListTile (
    onTap: (){
    Navigator.push(context, new MaterialPageRoute(builder: (context) => new scard(snapshot.data[index],id,token)));
    debugPrint("tile pressed");
    },
    title:Container(
    height: 300,
    color: Colors.white,
        child:Material(
            color: Color.fromRGBO(204, 204, 204, 0.5),
            elevation: 5,
            borderRadius: BorderRadius.circular(24.0),
            //shadowColor: Color(0x802196F3),
            child:Column(children:<Widget>[
              Text(" "),
              Text(snapshot.data[index].name,
                style: TextStyle(fontSize: 16),
                textAlign: TextAlign.center,),
              Text(" "),
              Row(
                children: <Widget>[
                  Expanded(
                    child:Text(snapshot.data[index].stype,
                      style: TextStyle(fontSize: 16),),),
                  Expanded(
                    child: Text(snapshot.data[index].scast,
                      style: TextStyle(fontSize: 16),),),
                  Expanded(
                      child: Text(snapshot.data[index].sgender,
                        style: TextStyle(fontSize: 16),)),


                ],
              ),
              Text(" "),

              Expanded(child:  Text(snapshot.data[index].description,
                style: TextStyle(fontSize: 16),
                textAlign: TextAlign.center,
              )),
              Text(" "),



              FlatButton(
                  child: new Text("Learn More"),
                  onPressed: (){
                    debug();
                  },
                  color: Colors.grey
              )



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