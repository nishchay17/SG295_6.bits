import 'dart:convert';
import 'package:flutter_app/app_screens/personalised.dart';
import 'package:http/http.dart' as http;
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_app/app_screens/schemecard.dart';
import 'package:flutter_app/app_screens/registration.dart';
import 'package:flutter_app/app_screens/login.dart';
import 'package:shared_preferences/shared_preferences.dart';
class schemes extends StatefulWidget {
  @override
  FirstScreen createState() => FirstScreen();
}

class FirstScreen extends State<schemes> {
  /*Future<List<Scheme>> _schemes;*/
String token;
String id;
  Future<List<Scheme>> getResponse() async {
    var data =
    await http.get('https://sihbackend2020.herokuapp.com/schemes');
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
void debug()
{
  debugPrint("buton pressed");
}
  void gett() async {

    final prefs = await SharedPreferences.getInstance();
     token= prefs.getString('token') ?? null;
    id =prefs.getString('id') ??null;
    print("Retrieved id $id");
    print("Retrieved $token");  }

  @override
  Widget build(BuildContext context) {
gett();
  return Scaffold(appBar:AppBar(title: Text("Home")),
      bottomNavigationBar: BottomAppBar(
        color: Color.fromRGBO(58, 66, 86, 1.0),
    child: Row(
      children:<Widget>[
        Expanded(child:RaisedButton(
          elevation: 6,
          color: Colors.grey,
          child: Text("Login"),
          onPressed: (){
            Navigator.push(context, new MaterialPageRoute(builder: (context) => new log()));
          },
        )),
        Text(" "),
        Expanded(child:RaisedButton(
          color: Colors.grey,
          elevation: 6,
          child: Text("SignUp"),
          onPressed: (){
            Navigator.push(context, new MaterialPageRoute(builder: (context) => new register()));
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

      body:
        Container(
          color: Colors.white,
      child:FutureBuilder(
    future: getResponse(),
    builder:( BuildContext Context, AsyncSnapshot snapshot ){
    if(snapshot.data == null){
      return Container(
        height: 400,
        child:Center(child:Icon(Icons.trip_origin))
      );
    }
    else return ListView.builder(itemCount: snapshot.data.length,
        itemBuilder:(BuildContext context,int index ){
      return Padding(
        padding: const EdgeInsets.all(16.0),
        child:
          ListTile (
          onTap: (){
            Navigator.push(context, new MaterialPageRoute(builder: (context) => new scard(snapshot.data[index],id,token)));
            debugPrint("tile pressed");
            },
          subtitle:Container(
          color:Colors.white,
          height: 300,
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

      ));
  }
  }
  class Scheme {
    var type;
    var eligibilityAgeLowerBound;
    var gender;
    var _id;
    String name;
    var eligibilityIncome;
    var eligibilityCaste;
    var state;
    var eligibilityAgeUpperBound;
    String description;
    String stype;
    String slowerbound;
    String sgender;
    String sid;
    String sincome;
    String scast;
    String sstate;
    String supperbound;

    Scheme(this.type, this.eligibilityAgeLowerBound, this.gender, this._id,
        this.name, this.eligibilityIncome, this.eligibilityCaste, this.state,
        this.eligibilityAgeUpperBound, this.description);

    convert() {
      {
        if (eligibilityCaste == 0)
          scast = '   GEN   ';
        else if (eligibilityCaste == 1)
          scast = '   OBC   ';
        else if (eligibilityCaste == 2)
          scast = ' ST / SC ';
        else if (eligibilityCaste == 3)
          scast = 'ST/SC/OBC';
        else
          scast = 'All Castes';
      }

      {
        if (type == 0)
          stype = ' Education ';
        else if (type == 1)
          stype = 'Agriculture';
        else if (type == 2)
          stype = ' Employment';
        else if (type == 3)
          stype = 'Health/Family';
        else
          stype = '  Housing  ';
      }
      {
        if (gender == 0)
          sgender = 'Male';
        else if (gender == 1)
          sgender = 'Female';
        else if (gender == 2)
          sgender = 'Trans';
        else if (gender == 3)
          sgender = 'All Genders';
        else
          sgender = 'other';
      }
   slowerbound= eligibilityAgeLowerBound.toString();
      sid=_id.toString();
    sincome=eligibilityIncome.toString();
    supperbound=eligibilityAgeUpperBound.toString();
    }
  }