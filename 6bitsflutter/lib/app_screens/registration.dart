import 'package:flutter/material.dart';
import 'package:http/http.dart' ;
import 'dart:convert';
class register extends StatefulWidget{
  @override
  register1 createState() {
    return register1();

  }
}
  class register1 extends State<register> {

   String password;
   String username;
    String gender;
    String firstName;
   String lastName;
    String caste;
    String age;
    String aadhaarNumber;
    String mobileNumber;
    String income;


    final GlobalKey<FormState> _formkey = GlobalKey<FormState>();
    bool ischecked0 = false;
    bool ischecked1 = false;
    bool ischecked2 = false;
    bool ischecked3 = false;
    bool ischecked4 = false;
    bool ischecked5 = false;
    bool ischecked6 = false;

   void makePostRequest() async {

     final uri = 'https://sihbackend2020.herokuapp.com/users/signup';
     final headers = {'Content-Type': 'application/json'};
     Map<String, dynamic> body = {
       "username": "$username",
       "name": "$firstName",
       "lastName": "$lastName",
       "state": 0,
       "caste":"$caste",
       "age":"$age",
       "aadhaarNumber":"$aadhaarNumber",
       "moblieNumber":"$mobileNumber",
       "income":"$income",
       "gender":"$gender",
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
     print(statuscode);
   }

    /*Widget buildname() {
     return TextFormField(
       decoration: InputDecoration(labelText: 'First Name'),
       validator: (String value) {
         if (value.isEmpty) {
           return ('First Name is required');
         }
       },
       onSaved: (String value) {
         firstName = value;
       },
     );
   } */

   Widget buildlastname() {
      return TextFormField(
        decoration: InputDecoration(labelText: 'Last Name'),
        validator: (String value) {
          if (value.isEmpty) {
            return ('Last Name is required');
          }
        },
        onSaved: (String value) {
          lastName = value;
        },
      );
    }

    Widget buildcaste() {
      return Row(
        children: <Widget>[
          Expanded(child: Text('GEN'),),
          Checkbox(
            value: ischecked0,
            onChanged: (value) {
              setState(() {
                ischecked0 = value;
                if (ischecked0 == true) {
                  caste = '0';
                  ischecked1 = false;
                  ischecked2 = false;
                }
              }
              );
            },
          ),
          Expanded(child: Text('OBC'),),
          Checkbox(
            value: ischecked1,
            onChanged: (value) {
              setState(() {
                ischecked1 = value;
                if (ischecked1 == true)
                  caste = '1';
                ischecked0 = false;
                ischecked2 = false;
              }
              );
            },
          ),
          Expanded(child: Text('ST/SC'),),
          Checkbox(
            value: ischecked2,
            onChanged: (value) {
              setState(() {
                ischecked2 = value;
                if (ischecked2 == true)
                  caste = '2';
                ischecked1 = false;
                ischecked0 = false;
              }
              );
            },
          )
        ],
      );
    }

    Widget buildgender() {
      return Row(
        children: <Widget>[
          Expanded(child: Text('Male'),),
          Checkbox(
            value: ischecked3,
            onChanged: (value) {
              setState(() {
                ischecked3 = value;
                if (ischecked3 == true) {
                  gender = '0';
                  ischecked4 = false;
                  ischecked5 = false;
                  ischecked6 = false;
                }
              }
              );
            },
          ),
          Expanded(child: Text('Female'),),
          Checkbox(
            value: ischecked4,
            onChanged: (value) {
              setState(() {
                ischecked4 = value;
                if (ischecked4 == true)
                  gender = '1';
                ischecked3 = false;
                ischecked5 = false;
                ischecked6 = false;
              }
              );
            },
          ),
          Expanded(child: Text('Trans'),),
          Checkbox(
            value: ischecked5,
            onChanged: (value) {
              setState(() {
                ischecked5 = value;
                if (ischecked5 == true)
                  gender = '2';
                ischecked4 = false;
                ischecked3 = false;
                ischecked6 = false;
              }
              );
            },
          ),
          Expanded(child: Text('Other'),),
          Checkbox(
            value: ischecked6,
            onChanged: (value) {
              setState(() {
                ischecked6 = value;
                if (ischecked6 == true)
                  gender = '3';
                ischecked4 = false;
                ischecked5 = false;
                ischecked3 = false;
              }
              );
            },
          )
        ],
      );
    }

    Widget buildmobilenumber() {
      return TextFormField(
        decoration: InputDecoration(labelText: 'Mobile Number'),
        validator: (var value) {
          if (value.isEmpty) {
            return ('Mobile Number is required');
          }
        },
        onSaved: (var value) {
          mobileNumber = value;
        },
      );
    }

    Widget buildaadharcard() {
      return TextFormField(
        decoration: InputDecoration(labelText: 'Aadhar Card  Number'),
        validator: (var value) {
          if (value.isEmpty) {
            return ('Aadhar Card Number is required');
          }
        },
        onSaved: (var value) {
          aadhaarNumber = value;
        },
      );
    }

    Widget buildage() {
      return TextFormField(
        decoration: InputDecoration(labelText: 'Age'),
        validator: (var value) {
          if (value.isEmpty) {
            return ('Age is required');
          }
        },
        onSaved: (var value) {
          age = value;
        },
      );
    }

    Widget buildincome() {
      return TextFormField(
        decoration: InputDecoration(labelText: 'Income'),
        validator: (var value) {
          if (value.isEmpty) {
            return ('Income is required');
          }
        },
        onSaved: (var value) {
          income = value;
        },
      );
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
        appBar: AppBar(title: Text("User Registration"),
        ),
        body: Container(
          margin: EdgeInsets.all(15.0),
          child: Form(
              key: _formkey,
              child: ListView(
                children: <Widget>[
              TextFormField(
              decoration: InputDecoration(labelText: 'First Name'),
            validator: (String value) {
              if (value.isEmpty) {
                return ('First Name is required');
              }
            },
            onChanged: (String value) {
              firstName = value;
              _formkey.currentState.save();
              },
          ),
                  buildlastname(),
                  buildcaste(),
                  buildmobilenumber(),
                  buildaadharcard(),
                  buildage(),
                  buildincome(),
                  buildusername(),
                  buildgender(),
                  buildpassword(),
                  SizedBox(height: 5),
                  RaisedButton(
                    color: Colors.deepOrange,
                    elevation: 6.0,
                    child: Text("Submit"),
                    onPressed: () {
                      if (!_formkey.currentState.validate()) {
                        return;
                      }
                      _formkey.currentState.save();
                      makePostRequest();
                      /* u.name=name;
          u.lastName=lastName;
          u.income=income;
          u.age=age;
          u.username=username;
          u.password=password;
          u.mobileNumber=mobileNumber;
          u.aadhaarNumber=aadhaarNumber;
           */
                      print(firstName);
                      print(lastName);
                      print(caste);
                      print(gender);
                      print(age);
                      print(income);
                      print(mobileNumber);
                      print(aadhaarNumber);
                      print(username);
                      print(password);
                    },


                  )

                  ],
              )),

        ),
      );
    }
  }