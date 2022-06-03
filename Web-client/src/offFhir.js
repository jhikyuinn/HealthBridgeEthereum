import React, {useState } from 'react';
import useCollapse from 'react-collapsed';
import axios from 'axios';

function offFhir(){
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
    const[Today,setToday]=useState("");
    const[EHRNumber,setEHRNumber]=useState("");
    const[Username,setUsername]=useState("");
    const[Userbirth,setUserbirth]=useState("");
    const[Usergender,setUsergender]=useState("");
    const[Userphone,setUserphone]=useState("");
    const[Userlocation,setUserlocation]=useState("");
    const[Ntype,setNtype]=useState("");
    const[Ndate,setNdate]=useState("");
    const[Nreview,setNreview]=useState("");
    const[Dtype,setDtype]=useState("");
    const[Ddate,setDdate]=useState("");
    const[Dreview,setDreview]=useState("");
    const[Ptype,setPtype]=useState("");
    const[Pdate,setPdate]=useState("");
    const[Plocation,setPlocation]=useState("");
    const[Preview,setPreview]=useState("");
    const[Vtype,setVtype]=useState("");
    const[Vdate,setVdate]=useState("");
    const[Vlocation,setVlocation]=useState("");
    const[Vreview,setVreview]=useState("");
    const[Vstype,setVstype]=useState("");
    const[Vsdate,setVsdate]=useState("");
    const[Vslocation,setVslocation]=useState("");
    const[Vsdoctor,setVsdoctor]=useState("");
    const[Vsreview,setVsreview]=useState("");
    const[Nstype,setNstype]=useState("");
    const[Nsdate,setNsdate]=useState("");
    const[Nslocation,setNslocation]=useState("");
    const[Nsdoctor,setNsdoctor]=useState("");
    const[Nsreview,setNsreview]=useState("");
    const[Htype,setHtype]=useState("");
    const[Hsolution,setHsolution]=useState("");
    const[Hdate,setHdate]=useState("");
    const[Hreview,setHreview]=useState("");

    var Response;

    const CreateInformation= async() => {
        await axios.put(`http://203.247.240.226:8080/fhir/Patient/${EHRNumber}`,{
          "resourceType" : "Patient",
          "id" : EHRNumber,
          "meta" : {
            "profile" : [
              "https://example.org/fhir/krcore/StructureDefinition/krcore-patient"
            ]
          },
          "text" : {
            "status" : "generated",
            "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>KR Core Patient Profile Example</p>\n    </div>"
          },
          "identifier" : [
            {
              "type" : {
                "coding" : [
                  {
                    "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code" : "MR"
                  }
                ]
              },
              "system" : "urn:oid:1.2.3.4.5.6",
              "value" : "MR12345"
            }
          ],
          "name" : [
            {
              "text" : Username,
            }
          ],
          "telecom" : [
            {
              "system" : "phone",
              "value" : Userphone,
            }
          ],
          "gender" : Usergender,
          "birthDate" : Userbirth,
          "address" : [
            {
              "extension" : [
                {
                  "url" : "https://example.org/fhir/krcore/StructureDefinition/krcore-roadnameaddress",
                }
              ],
              "text" : Userlocation,
              "postalCode" : ""
            }
          ]
        },
        await axios.put(`http://203.247.240.226:8080/fhir/QuestionnaireResponse/${EHRNumber}`,{
            "resourceType": "QuestionnaireResponse",
            "id": EHRNumber,
            "text": {
              "status": "generated",
              "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><table border=\"1\" cellpadding=\"0\" cellspacing=\"0\" style=\"border: 1px #F0F0F0 solid; font-size: 11px; font-family: verdana; vertical-align: top;\"><tr style=\"border: 2px #F0F0F0 solid; font-size: 11px; font-family: verdana; vertical-align: top\"><th style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"formats.html#table\" title=\"The linkId for the item\">LinkId</a></th><th style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"formats.html#table\" title=\"Text for the item\">Text</a></th><th style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"formats.html#table\" title=\"Minimum and Maximum # of times the the itemcan appear in the instance\">Definition</a></th><th style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"formats.html#table\" title=\"The type of the item\">Answer</a><span style=\"float: right\"><a href=\"formats.html#table\" title=\"Legend for this format\"><img src=\"help16.png\" alt=\"doco\" style=\"background-color: inherit\"/></a></span></th></tr><tr style=\"border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white\"><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck1.png)\" class=\"hierarchy\"><img src=\"tbl_spacer.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"icon_q_root.gif\" alt=\".\" style=\"background-color: white; background-color: inherit\" title=\"QuestionnaireResponseRoot\" class=\"hierarchy\"/> f201</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">QuestionnaireResponse</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/></tr>\n<tr style=\"border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7\"><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck10.png)\" class=\"hierarchy\"><img src=\"tbl_spacer.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"tbl_vjoin.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"icon-q-string.png\" alt=\".\" style=\"background-color: #F7F7F7; background-color: inherit\" title=\"Item\" class=\"hierarchy\"/> 1</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">Do you have allergies?</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">true</td></tr>\n<tr style=\"border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white\"><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck11.png)\" class=\"hierarchy\"><img src=\"tbl_spacer.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"tbl_vjoin.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"icon-q-group.png\" alt=\".\" style=\"background-color: white; background-color: inherit\" title=\"Group\" class=\"hierarchy\"/> 2</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">General questions</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/></tr>\n<tr style=\"border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7\"><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck110.png)\" class=\"hierarchy\"><img src=\"tbl_spacer.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"tbl_vline.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"tbl_vjoin.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"icon-q-string.png\" alt=\".\" style=\"background-color: #F7F7F7; background-color: inherit\" title=\"Item\" class=\"hierarchy\"/> 2.1</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">What is your gender?</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">Male</td></tr>\n<tr style=\"border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white\"><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck110.png)\" class=\"hierarchy\"><img src=\"tbl_spacer.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"tbl_vline.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"tbl_vjoin.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"icon-q-string.png\" alt=\".\" style=\"background-color: white; background-color: inherit\" title=\"Item\" class=\"hierarchy\"/> 2.2</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">What is your date of birth?</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">1960-03-13</td></tr>\n<tr style=\"border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7\"><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck110.png)\" class=\"hierarchy\"><img src=\"tbl_spacer.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"tbl_vline.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"tbl_vjoin.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"icon-q-string.png\" alt=\".\" style=\"background-color: #F7F7F7; background-color: inherit\" title=\"Item\" class=\"hierarchy\"/> 2.3</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">What is your country of birth?</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">The Netherlands</td></tr>\n<tr style=\"border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white\"><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck100.png)\" class=\"hierarchy\"><img src=\"tbl_spacer.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"tbl_vline.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"tbl_vjoin_end.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"icon-q-string.png\" alt=\".\" style=\"background-color: white; background-color: inherit\" title=\"Item\" class=\"hierarchy\"/> 2.4</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">What is your marital status?</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">married</td></tr>\n<tr style=\"border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7\"><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck01.png)\" class=\"hierarchy\"><img src=\"tbl_spacer.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"tbl_vjoin_end.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"icon-q-group.png\" alt=\".\" style=\"background-color: #F7F7F7; background-color: inherit\" title=\"Group\" class=\"hierarchy\"/> 3</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">Intoxications</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/></tr>\n<tr style=\"border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white\"><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck010.png)\" class=\"hierarchy\"><img src=\"tbl_spacer.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"tbl_blank.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"tbl_vjoin.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"icon-q-string.png\" alt=\".\" style=\"background-color: white; background-color: inherit\" title=\"Item\" class=\"hierarchy\"/> 3.1</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">Do you smoke?</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">false</td></tr>\n<tr style=\"border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7\"><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck000.png)\" class=\"hierarchy\"><img src=\"tbl_spacer.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"tbl_blank.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"tbl_vjoin_end.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"icon-q-string.png\" alt=\".\" style=\"background-color: #F7F7F7; background-color: inherit\" title=\"Item\" class=\"hierarchy\"/> 3.2</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">Do you drink alchohol?</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">false</td></tr>\n<tr><td colspan=\"4\" class=\"hierarchy\"><br/><a href=\"formats.html#table\" title=\"Legend for this format\"><img src=\"help16.png\" alt=\"doco\" style=\"background-color: inherit\"/> Documentation for this format</a></td></tr></table></div>"
            },
            "status": "completed",
            "subject": {
              "reference": "Patient/f201",
              "display": "Roel"
            },
            "authored": "2013-06-18T00:00:00+01:00",
            "author": {
              "reference": "Practitioner/f201"
            },
            "source": {
              "reference": "Practitioner/f201"
            },
            "item": [
              {
                "linkId": "1",
                "text": "aK",
                "item": [
                  {
                    "linkId": "1.1",
                    "text": "What is your gender?",
                    "answer": [
                      {
                        "valueString": "Male"
                      }
                    ]
                  },
                  {
                    "linkId": "1.2",
                    "text": "What is your date of birth?",
                    "answer": [
                      {
                        "valueDate": "1960-03-13"
                      }
                    ]
                  },
                  {
                    "linkId": "1.3",
                    "text": "What is your country of birth?",
                    "answer": [
                      {
                        "valueString": "The Netherlands"
                      }
                    ]
                  },
                  {
                    "linkId": "2.4",
                    "text": "What is your marital status?",
                    "answer": [
                      {
                        "valueString": "married"
                      }
                    ]
                  }
                ]
              },
              {
                "linkId": "3",
                "text": "Intoxications",
                "item": [
                  {
                    "linkId": "3.1",
                    "text": "Do you smoke?",
                    "answer": [
                      {
                        "valueBoolean": false
                      }
                    ]
                  },
                  {
                    "linkId": "3.2",
                    "text": "Do you drink alchohol?",
                    "answer": [
                      {
                        "valueBoolean": false
                      }
                    ]
                  }
                ]
              }
            ]
          }
        )
      )
    .then((res) => {
      window.alert("Create Success");
      console.log(res);
    })
}

const SearchInformation = async () => {
    await axios.get(`http://203.247.240.226:8080/fhir/Patient/${EHRNumber}`).then((res) => {
      window.alert("Search Success");
      setUserbirth(res.data.birthDate);
      setUsergender(res.data.gender);
      setUserphone(res.data.telecom[0].value);
    });
}

const DeleteInformation = async () => {
    await axios.delete(`http://203.247.240.226:8080/fhir/Patient/${EHRNumber}`).then((res) => {  
      window.alert("Delete Success");
      console.log(res);
    });
}

    
    return(
        <div className="container container-fluid login-conatiner">
          <div className="col-md-4">
            <div className="login-form">
                <h2 className="text-center">New Record</h2>

                Today Date
                <div className="form-group">
                <input
                  type="Date"
                  value={Today}
                  onChange={(e) => {setToday(e.target.value)}}
                  className="form-control"
                  placeholder="Today"
                />
                </div>

                <div>
                <button {...getToggleProps()}>
                {isExpanded ? 'User Basic Information v' : 'User Basic Information >'}
                </button>
                <section {...getCollapseProps()}>
                <div className="form-group">
                <input
                  type="text"
                  value={EHRNumber}
                  onChange={(e) => {setEHRNumber(e.target.value)}}
                  className="form-control"
                  placeholder="EHRNumber"
                />
                </div>
                <div className="form-group">
                <input
                  type="text"
                  value={Username}
                  onChange={(e) => {setUsername(e.target.value)}}
                  className="form-control"
                  placeholder="Username"
                />
              </div>
              <div className="form-group">
                <input
                  type="Date"
                  value={Userbirth}
                  onChange={(e) => {setUserbirth(e.target.value)}}
                  className="form-control"
                  placeholder="Userbirth"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Usergender}
                  onChange={(e) => {setUsergender(e.target.value)}}
                  className="form-control"
                  placeholder="Usergender"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Userphone}
                  onChange={(e) => {setUserphone(e.target.value)}}
                  className="form-control"
                  placeholder="Userphone"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Userlocation}
                  onChange={(e) => {setUserlocation(e.target.value)}}
                  className="form-control"
                  placeholder="Userlocation"
                />
              </div>
             </section>
             </div>

             <div>
              <button {...getToggleProps()}>
              {isExpanded ? '  Disability aids v' : '  Disability aids >'}
              </button>
              <section {...getCollapseProps()}>
               <div className="form-group">
                <input
                  type="text"
                  value={Dtype}
                  onChange={(e) => {setDtype(e.target.value)}}
                  className="form-control"
                  placeholder="Type"
                />
              </div>
              <div className="form-group">
                <input
                  type="Date"
                  value={Ddate}
                  onChange={(e) => {setDdate(e.target.value)}}
                  className="form-control"
                  placeholder="Start date"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Dreview}
                  onChange={(e) => {setDreview(e.target.value)}}
                  className="form-control"
                  placeholder="Review"
                />
              </div>
              </section>
             </div>

             <div>
              <button {...getToggleProps()}>
              {isExpanded ? '   Nutritional supplements v' : '   Nutritional supplements >'}
              </button>
              <section {...getCollapseProps()}>
              <div className="form-group">
                <input
                  type="text"
                  value={Ntype}
                  onChange={(e) => {setNtype(e.target.value)}}
                  className="form-control"
                  placeholder="Type"
                />
              </div>
              <div className="form-group">
                <input
                  type="Date"
                  value={Ndate}
                  onChange={(e) => {setNdate(e.target.value)}}
                  className="form-control"
                  placeholder="Start date"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Nreview}
                  onChange={(e) => {setNreview(e.target.value)}}
                  className="form-control"
                  placeholder="Review"
                />
              </div>
              </section>
              </div>

              <div>
              <button {...getToggleProps()}>
              {isExpanded ? '  Non-surgical cosmetic treatment v' : '  Non-surgical cosmetic treatment >'}
              </button>
              <section {...getCollapseProps()}>
              <div className="form-group">
                <input
                  type="text"
                  value={Nstype}
                  onChange={(e) => {setNstype(e.target.value)}}
                  className="form-control"
                  placeholder="Type"
                />
              </div>
              <div className="form-group">
                <input
                  type="Date"
                  value={Nsdate}
                  onChange={(e) => {setNsdate(e.target.value)}}
                  className="form-control"
                  placeholder=" date"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Nslocation}
                  onChange={(e) => {setNslocation(e.target.value)}}
                  className="form-control"
                  placeholder="Location"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Nsdoctor}
                  onChange={(e) => {setNsdoctor(e.target.value)}}
                  className="form-control"
                  placeholder="Doctor"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Nsreview}
                  onChange={(e) => {setNsreview(e.target.value)}}
                  className="form-control"
                  placeholder="Review"
                />
              </div>
              </section>
              </div>

              <div>
              <button {...getToggleProps()}>
              {isExpanded ? '  Vision correction surgery v' : '  Vision correction surgery >'}
              </button>
              <section {...getCollapseProps()}>
              <div className="form-group">
                <input
                  type="text"
                  value={Vstype}
                  onChange={(e) => {setVstype(e.target.value)}}
                  className="form-control"
                  placeholder="Type"
                />
              </div>
              <div className="form-group">
                <input
                  type="Date"
                  value={Vsdate}
                  onChange={(e) => {setVsdate(e.target.value)}}
                  className="form-control"
                  placeholder=" date"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Vslocation}
                  onChange={(e) => {setVslocation(e.target.value)}}
                  className="form-control"
                  placeholder="Location"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Vsdoctor}
                  onChange={(e) => {setVsdoctor(e.target.value)}}
                  className="form-control"
                  placeholder="Doctor"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Vsreview}
                  onChange={(e) => {setVsreview(e.target.value)}}
                  className="form-control"
                  placeholder="Review"
                />
              </div>
              </section>
              </div>

              <div>
              <button {...getToggleProps()}>
              {isExpanded ? '  Hair problems v' : '  Hair problems >'}
              </button>
              <section {...getCollapseProps()}>
              <div className="form-group">
                <input
                  type="text"
                  value={Htype}
                  onChange={(e) => {setHtype(e.target.value)}}
                  className="form-control"
                  placeholder="Type"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Hsolution}
                  onChange={(e) => {setHsolution(e.target.value)}}
                  className="form-control"
                  placeholder="Location"
                />
              </div>
              <div className="form-group">
                <input
                  type="Date"
                  value={Hdate}
                  onChange={(e) => {setHdate(e.target.value)}}
                  className="form-control"
                  placeholder="Start date"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Hreview}
                  onChange={(e) => {setHreview(e.target.value)}}
                  className="form-control"
                  placeholder="Review"
                />
              </div>
              </section>
              </div>

              <div>
              <button {...getToggleProps()}>
              {isExpanded ? '  Vaccine v' : '  Vaccine >'}
              </button>
              <section {...getCollapseProps()}>
              <div className="form-group">
                <input
                  type="text"
                  value={Vtype}
                  onChange={(e) => {setVtype(e.target.value)}}
                  className="form-control"
                  placeholder="Type"
                />
              </div>
              <div className="form-group">
                <input
                  type="Date"
                  value={Vdate}
                  onChange={(e) => {setVdate(e.target.value)}}
                  className="form-control"
                  placeholder=" date"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Vlocation}
                  onChange={(e) => {setVlocation(e.target.value)}}
                  className="form-control"
                  placeholder="Location"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Vreview}
                  onChange={(e) => {setVreview(e.target.value)}}
                  className="form-control"
                  placeholder="Review"
                />
              </div>
              </section>
              </div>
              
              <div>
              <button {...getToggleProps()}>
              {isExpanded ? '  Physical therapy / rehabilitation v' : '  Physical therapy / rehabilitation >'}
              </button>
              <section {...getCollapseProps()}>
              <div className="form-group">
                <input
                  type="text"
                  value={Ptype}
                  onChange={(e) => {setPtype(e.target.value)}}
                  className="form-control"
                  placeholder="Type"
                />
              </div>
              <div className="form-group">
                <input
                  type="Date"
                  value={Pdate}
                  onChange={(e) => {setPdate(e.target.value)}}
                  className="form-control"
                  placeholder="Start date"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Plocation}
                  onChange={(e) => {setPlocation(e.target.value)}}
                  className="form-control"
                  placeholder="Location"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={Preview}
                  onChange={(e) => {setPreview(e.target.value)}}
                  className="form-control"
                  placeholder="Review"
                />
              </div>
              </section>
              </div>
            </div>
            </div>
            
        <div className="col-md-6 col-md-offset-2">
          <div className="c-list">
            <h2 className="text-center">Record Confirm</h2>
            <table className="table table-bordered table-striped" style={{width:"1200px"}}>
              <thead>
                <tr>
                  <th>Today Date</th>
                  <th>EHRnumber</th>
                  <th>User Name</th>
                  <th>User Birth</th>
                  <th>User Gender</th>
                  <th>User Phone</th>
                  <th>User Location</th>
                  <th>Disability aids Type</th>
                  <th>Disability aids Start Date</th>
                  <th>Disability aids Review</th>
                </tr>
                </thead>

                  <thead>
                  <tr>
                  <td>{Today}</td>
                  <td>{EHRNumber}</td>
                  <td>{Username}</td>
                  <td>{Userbirth}</td>
                  <td>{Usergender}</td>
                  <td>{Userphone}</td>
                  <td>{Userlocation}</td>
                  <td>{Dtype}</td>
                  <td>{Ddate}</td>
                  <td>{Dreview}</td>
                  </tr>
                  </thead>
              
            </table>


            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Nutritional supplements Type</th>
                  <th>Nutritional supplements Dosing Start Date</th>
                  <th>Nutritional supplements Review</th>
                  <th>Non-surgical cosmetic treatment Type</th>
                  <th>Non-surgical cosmetic treatment Date</th>
                  <th>Non-surgical cosmetic treatment Location</th>
                  <th>Non-surgical cosmetic treatment Doctor</th>
                  <th>Non-surgical cosmetic treatment Review</th>
                  
                </tr>
                </thead>

                <thead>
                <tr>
                <td>{Nstype}</td>
                <td>{Nsdate}</td>
                <td>{Nslocation}</td>
                <td>{Nsdoctor}</td>
                <td>{Nsreview}</td>
                <td>{Ntype}</td>
                <td>{Ndate}</td>
                <td>{Nreview}</td>
                
                </tr>
                </thead>
            </table>

            <table className="table table-bordered table-striped">
            <thead>
                <tr>
                  <th>Vision correction surgery Type</th>
                  <th>Vision correction surgery Date</th>
                  <th>Vision correction surgery Location</th>
                  <th>Vision correction surgery Doctor</th>
                  <th>Vision correction surgery Review</th>
                  <th>Hair problems Type</th>
                  <th>Hair problems Solution</th>
                  <th>Hair problems Period</th>
                  <th>Hair problems Review</th>
                </tr>
                </thead>

            <thead>
                <tr>
                <td>{Vstype}</td>
                <td>{Vsdate}</td>
                <td>{Vslocation}</td>
                <td>{Vsdoctor}</td>
                <td>{Vsreview}</td>
                <td>{Htype}</td>
                <td>{Hsolution}</td>
                <td>{Hdate}</td>
                <td>{Hreview}</td>
                </tr>
                </thead>
      
            </table>

            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Vaccine Type</th>
                  <th>Vaccine Date</th>
                  <th>Vaccine Location</th>
                  <th>Vaccine Review</th>
                  <th>Physical therapy / rehabilitation Type</th>
                  <th>Physical therapy / rehabilitation Date</th>
                  <th>Physical therapy / rehabilitation Location</th>
                  <th>Physical therapy / rehabilitation Review</th>
                </tr>
                </thead>

                <thead>
                <tr>
                <td>{Vtype}</td>
                <td>{Vdate}</td>
                <td>{Vlocation}</td>
                <td>{Vreview}</td>
                <td>{Ptype}</td>
                <td>{Pdate}</td>
                <td>{Plocation}</td>
                <td>{Preview}</td>
                </tr>
                </thead>
            </table>

            
            </div>
             <div className="form-group" style={{display:"flex"}}>
               <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={CreateInformation}
                >
                Create
               </button>

               <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={SearchInformation}
                >
                Search
               </button>

               <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={DeleteInformation}
                >
                Delete
               </button>
             </div>
        </div>
    </div>
  )
}
  
export default offFhir;