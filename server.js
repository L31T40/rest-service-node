const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");


// // Define font files
// var fonts = {
//   Roboto: {
//     normal: './fonts/Roboto/Roboto-Regular.ttf',
//     bold: './fonts/Roboto/Roboto-Medium.ttf',
//     italics: './fonts/Roboto/Roboto-Italic.ttf',
//     bolditalics: './fonts/Roboto/Roboto-MediumItalic.ttf'
//   }
// };

	var fonts = {
		Roboto: {
			normal: path.join(__dirname, '..', 'rest-service-node', '/public/fonts/Roboto/Roboto-Regular.ttf'),
			bold: path.join(__dirname, '..', 'rest-service-node', '/public/fonts/Roboto/Roboto-Medium.ttf'),
			italics: path.join(__dirname, '..', 'rest-service-node', '/public/fonts/Roboto/Roboto-Italic.ttf'),
			bolditalics: path.join(__dirname, '..', 'rest-service-node', '/public/fonts/Roboto/Roboto-MediumItalic.ttf')
		}
	};

var PdfPrinter = require('pdfmake');
var printer = new PdfPrinter(fonts);

// var Roboto = require('./fonts/Roboto');
// PdfPrinter.addFonts(Roboto);


const app = express();
const fs = require('fs');



app.use(bodyParser.json({
  limit: '50mb'
}));

app.use(bodyParser.urlencoded({
  limit: '50mb',
  parameterLimit: 100000,
  extended: true 
}));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/add", (req, res) => {

  const MachineId                         = req.body.MachineId;
  const RecordNo                          = req.body.RecordNo;
  const MeasureTime                       = req.body.MeasureTime;
  const DeviceType                        = req.body.DeviceType;
  const UnitNo                            = req.body.UnitNo;
  const UnitName                          = req.body.UnitName;

  const Accountorgid                      = req.body.Account.orgid;
  const Accountusername                   = req.body.Account.username;
  const MemberName                        = req.body.Member.Name;
  const MemberMobile                      = req.body.Member.Mobile;
  const MemberAge                         = req.body.Member.Age;
  const MemberSex                         = req.body.Member.Sex;
  const MemberAddress                     = req.body.Member.Address;
  const MemberBirthday                    = req.body.Member.Birthday;
  const MemberUserIcon                    = req.body.Member.UserIcon;
  const MemberNation                      = req.body.Member.Nation;
  const MemberIdCode                      = req.body.Member.IdCode;
  const MemberUserID                      = req.body.Member.UserID;

  const Height                            = req.body.Height.Height;
  const HeightWeight                      = req.body.Height.Weight;
  const HeightBMI                         = req.body.Height.BMI;

  const BloodPressureHighPressure         = req.body.BloodPressure.HighPressure;
  const BloodPressureLowPressure          = req.body.BloodPressure.LowPressure;
  const BloodPressurePulse                = req.body.BloodPressure.Pulse;

  const BoOxygen                          = req.body.Bo.Oxygen;
  const BoBpm                             = req.body.Bo.Bpm;
  const BoOxygenList                      = req.body.Bo.OxygenList;
  const BoBpmList                         = req.body.Bo.BpmList;



  const Temperature                       = req.body.Temperature.Temperature;

  const Whr                               = req.body.Whr.Whr;
  const WhrHipline                        = req.body.Whr.Hipline;
  const WhrWaistline                      = req.body.Whr.Waistline;

  const BloodSugar                        = req.body.BloodSugar.BloodSugar;
  const BloodSugarType                    = req.body.BloodSugar.BloodsugarType;


  const Ua                                = req.body.Ua.Ua;

  const Chol                              = req.body.Chol.Chol;

  const UrinalysisURO                     = req.body.Urinalysis.URO;
  const UrinalysisBLD                     = req.body.Urinalysis.BLD;
  const UrinalysisBIL                     = req.body.Urinalysis.BIL;
  const UrinalysisKET                     = req.body.Urinalysis.KET;
  const UrinalysisLEU                     = req.body.Urinalysis.LEU;
  const UrinalysisGLU                     = req.body.Urinalysis.GLU;
  const UrinalysisPRO                     = req.body.Urinalysis.PRO;
  const UrinalysisPH                      = req.body.Urinalysis.PH;
  const UrinalysisNIT                     = req.body.Urinalysis.NIT;
  const UrinalysisSG                      = req.body.Urinalysis.SG;
  const UrinalysisVC                      = req.body.Urinalysis.VC;


  const Hb                                = req.body.Hb.Hb;
  const HbHct                             = req.body.Hb.Hct;


  const VisionEnvironment                 = req.body.Vision.Environment;
  const VisionLeftVision                  = req.body.Vision.LeftVision;
  const VisionRightVision                 = req.body.Vision.RightVision;
  const VisionDoubleVision                = req.body.Vision.DoubleVision;
  const VisionModel                       = req.body.Vision.Model;





  const Tooth                             = req.body.Tooth;

  const PEEcgHr                           = req.body.PEEcg.Hr;
  const PEEcgPAxis                        = req.body.PEEcg.PAxis;
  const PEEcgQRSAxis                      = req.body.PEEcg.QRSAxis;
  const PEEcgTAxis                        = req.body.PEEcg.TAxis;
  const PEEcgPR                           = req.body.PEEcg.PR;
  const PEEcgQRS                          = req.body.PEEcg.QRS;
  const PEEcgQT                           = req.body.PEEcg.QT;
  const PEEcgQTc                          = req.body.PEEcg.QTc;
  const PEEcgRV5                          = req.body.PEEcg.RV5;
  const PEEcgSV1                          = req.body.PEEcg.SV1;
  const PEEcgResultStr                    = req.body.PEEcg.ResultStr;
  let PEEcgEcgImg                         = req.body.PEEcg.EcgImg;

  if (typeof PEEcgEcgImg == 'undefined'|| PEEcgEcgImg =='' ) {
        PEEcgEcgImg='/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAfAGQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/iiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9k=\n'
      }

  const UltrasonicNotes                   = req.body.Ultrasonic.Notes;
  const UltrasonicDescrible               = req.body.Ultrasonic.Describle;
  const UltrasonicBitmapList              = req.body.Ultrasonic.BitmapList;


  
  const BloodFatTChol                     = req.body.BloodFat.TChol;
  const BloodFatHdlChol                   = req.body.BloodFat.HdlChol;
  const BloodFatTrig                      = req.body.BloodFat.Trig;
  const BloodFatTcHdl                     = req.body.BloodFat.TcHdl;
  const BloodFatCalcLdl   	              = req.body.BloodFat.CalcLdl;
  
  let BloodFatResult                      = req.body.BloodFat.Result;
  if (BloodFatResult == '1') {
        BloodFatResult='Anormal'
  }
  else if (BloodFatResult == '0') {
    BloodFatResult='Normal'
  } else {BloodFatResult='N/D'}


  // const PsychoA_blueAverageScore          = req.body.PsychologicalAssessment.TableSCL90.blueAverageScore;
  // const PsychoA_bluePNumber               = req.body.PsychologicalAssessment.TableSCL90.bluePNumber;
  // const PsychoA_blueScore                 = req.body.PsychologicalAssessment.TableSCL90.blueScore;
  // const PsychoA_bodyAverageScore          = req.body.PsychologicalAssessment.TableSCL90.bodyAverageScore;
  // const PsychoA_bodyPNumber               = req.body.PsychologicalAssessment.TableSCL90.bodyPNumber;
  // const PsychoA_bodyScore                 = req.body.PsychologicalAssessment.TableSCL90.bodyScore;
  // const PsychoA_curiouScore               = req.body.PsychologicalAssessment.TableSCL90.curiouScore;
  // const PsychoA_curiousAverageScore       = req.body.PsychologicalAssessment.TableSCL90.curiousAverageScore;
  // const PsychoA_curiousPNumber            = req.body.PsychologicalAssessment.TableSCL90.curiousPNumber;
  // const PsychoA_forceAverageScore         = req.body.PsychologicalAssessment.TableSCL90.forceAverageScore;
  // const PsychoA_forcePNumber              = req.body.PsychologicalAssessment.TableSCL90.forcePNumber;
  // const PsychoA_forceScore                = req.body.PsychologicalAssessment.TableSCL90.forceScore;
  // const PsychoA_hostileAverageScore       = req.body.PsychologicalAssessment.TableSCL90.hostileAverageScore;
  // const PsychoA_hostilePNumber            = req.body.PsychologicalAssessment.TableSCL90.hostilePNumber;
  // const PsychoA_hostileScore              = req.body.PsychologicalAssessment.TableSCL90.hostileScore;
  // const PsychoA_mType                     = req.body.PsychologicalAssessment.TableSCL90.mType;
  // const PsychoA_nNumber                   = req.body.PsychologicalAssessment.TableSCL90.nNumber;
  // const PsychoA_nNumberStandard           = req.body.PsychologicalAssessment.TableSCL90.nNumberStandard;
  // const PsychoA_otherAverageScore         = req.body.PsychologicalAssessment.TableSCL90.otherAverageScore;
  // const PsychoA_otherPNumber              = req.body.PsychologicalAssessment.TableSCL90.otherPNumber;
  // const PsychoA_otherScore                = req.body.PsychologicalAssessment.TableSCL90.otherScore;
  // const PsychoA_pAverageScore             = req.body.PsychologicalAssessment.TableSCL90.pAverageScore;
  // const PsychoA_pAverageScoreStandard     = req.body.PsychologicalAssessment.TableSCL90.pAverageScoreStandard;
  // const PsychoA_pNumber                   = req.body.PsychologicalAssessment.TableSCL90.pNumber;
  // const PsychoA_pNumberStandard           = req.body.PsychologicalAssessment.TableSCL90.pNumberStandard;
  // const PsychoA_pScore                    = req.body.PsychologicalAssessment.TableSCL90.pScore;
  // const PsychoA_pScoreStandard            = req.body.PsychologicalAssessment.TableSCL90.pScoreStandard;
  // const PsychoA_recordNo                  = req.body.PsychologicalAssessment.TableSCL90.recordNo;
  // const PsychoA_relationAverageScore      = req.body.PsychologicalAssessment.TableSCL90.relationAverageScore;
  // const PsychoA_relationPNumber           = req.body.PsychologicalAssessment.TableSCL90.relationPNumber;
  // const PsychoA_relationScore             = req.body.PsychologicalAssessment.TableSCL90.relationScore;
  // const PsychoA_spiritAverageScore        = req.body.PsychologicalAssessment.TableSCL90.spiritAverageScore;
  // const PsychoA_spiritPNumber             = req.body.PsychologicalAssessment.TableSCL90.spiritPNumber;
  // const PsychoA_spiritScore               = req.body.PsychologicalAssessment.TableSCL90.spiritScore;
  // const PsychoA_stubbornAverageScore      = req.body.PsychologicalAssessment.TableSCL90.stubbornAverageScore;
  // const PsychoA_stubbornPNumber           = req.body.PsychologicalAssessment.TableSCL90.stubbornPNumber;
  // const PsychoA_stubbornScore             = req.body.PsychologicalAssessment.TableSCL90.stubbornScore;
  // const PsychoA_terrorAverageScore        = req.body.PsychologicalAssessment.TableSCL90.terrorAverageScore;
  // const PsychoA_terrorPNumber             = req.body.PsychologicalAssessment.TableSCL90.terrorPNumber;
  // const PsychoA_terrorScore               = req.body.PsychologicalAssessment.TableSCL90.terrorScore;
  // const PsychoA_totalAvgScore             = req.body.PsychologicalAssessment.TableSCL90.totalAvgScore;
  // const PsychoA_totalAvgScoreStandard     = req.body.PsychologicalAssessment.TableSCL90.totalAvgScoreStandard;
  // const PsychoA_totalScore                = req.body.PsychologicalAssessment.TableSCL90.totalScore;
  // const PsychoA_totalScoreStandard        = req.body.PsychologicalAssessment.TableSCL90.totalScoreStandard;






  let data = JSON.stringify(req.body); 
  try {
      var objectValue = JSON.parse(data);
  } catch (e) {
    console.log("Error, not a valid JSON string");
  }
  
  const map = new Map();
  map.set = JSON.parse(data);

  let fileName = objectValue.Member.Name + '_' + objectValue.RecordNo
  
  // console.log(recv.contextResponses[0].contextElement.attributes[0].value);
  //console.log(data.Member.Name);
  // for (const [key, value] of Object.entries(map)) {
  //   if (value.length == 0) {
  //     value == "N/D";
  //   }
  //   console.log(key, value);
  // }

  for (const [key, value] of Object.entries(map)) {
    console.log( key, value);
  }

  function getKey(val) {
  return Object.keys(map).find(key => map[key] === val);
}


  let xx = typeof Height;
  console.log(objectValue.Member.Name);
  console.log("Altura: "+Height);
  console.log("tipo Altura: "+xx);
  console.log("Altura2: "+ getKey('Tooth'));
  console.log("data.MachineId");
  console.log("Accountorgid -> " + Accountorgid);
  console.log("PEEcgEcgImg -> " + PEEcgEcgImg.length);
  
  fs.writeFileSync('./public/JSON/' + fileName + '.json', data);
  
	//fs.writeFileSync('sonka.json', data);
	

  var docDefinition = { 
    content: [
      {
        image: './public/images/logo.png',
        width: 50
      },
      { text: '\n\n'},
      // { text: '\n      Resumo Medicina no Trabalho                                                                                       \n\n', color: 'white', bold: true, background: '#A464A6' },
      {
      style: 'tableExample', 
          table: {
            heights: 10,widths: ['*'],
            body: [
              [
                { text: '   Resumo Medicina no Trabalho ', style: 'header',color: 'white',fillColor:'#A464A6' },                 
              ],
            ]
        },   
          layout: 'noBorders'
      },


      {
          text:[
            { text: 'ID Utente: ', style:'boldText' },        { text: MemberUserID, style:'normalText' }, "     ",
            { text: 'Utente: ', style:'boldText' },           { text: MemberName+'\n\n', style:'normalText' }, 
            { text: 'Data Nascimento: ', style:'boldText' },  { text: MemberBirthday, style:'normalText' },"     ",
            { text: 'Idade: ', style:'boldText' },            { text: MemberAge, style:'normalText' },"     ",
            { text: 'Sexo: ', style:'boldText' },             { text: MemberSex, style:'normalText' },"     ",
            { text: 'Nacionalidade: ', style:'boldText' },    { text: MemberNation, style:'normalText' },"     ",
            { text: 'Sexo: ', style:'boldText' },             { text: MemberSex+'\n\n', style:'normalText' }, 
            { text: 'Morada: ', style:'boldText' },           { text: MemberAddress+'\n\n', style:'normalText' }, 
            { text: 'Telemóvel: ', style:'boldText' },        { text: MemberMobile+'\n\n\n\n', style:'normalText' }
          ],
        
      },
            
      // { text: '\n      Resultados Análises                                                                                               \n\n', color: 'white', bold: true, background: '#A464A6' },
      
      {
      style: 'tableExample', 
          table: {
            heights: 10,widths: ['*'],
            body: [
              [
                { text: '   Resultados Análises ', style: 'header',color: 'white',fillColor:'#A464A6' },                 
              ],
            ]
        },   
          layout: 'noBorders'
      },


     {
      style: 'tableExample', 
          table: {
            headerRows: 1,heights: 10,widths: ['*', '*', '*' , '*', '*', '*' ],
            body: [
              [{ text: 'IMC', style: 'header' }, '','', '','',''],
              [
                { text: 'Altura: ', style: 'boldText' }, { text: Height, style: 'italicText' },
                { text: 'Peso', style: 'boldText' } , { text: HeightWeight, style: 'italicText' },
                { text: 'IMC: ', style: 'boldText' } , { text: HeightBMI, style: 'italicText' }
              ],
            ]
          },         
          layout: 'lightHorizontalLines'
      },      
     {
      style: 'tableExample', 
          table: {
            headerRows: 1,heights: 10,widths: ['*', '*', '*' , '*', '*', '*' ],
            body: [
              [{colSpan: 2, text: 'Pressão Sanguínea', style: 'header' }, '','', '','',''],
              [
                { text: 'Alta: ', style: 'boldText' }, { text: BloodPressureHighPressure, style: 'italicText' },
                { text: 'Baixa:', style: 'boldText' } , { text: BloodPressureLowPressure, style: 'italicText' },
                { text: 'Pulso: ', style: 'boldText' } , { text: BloodPressurePulse, style: 'italicText' }
              ],
            ]
          },         
          layout: 'lightHorizontalLines'
      },
     {
      style: 'tableExample', 
          table: {
            headerRows: 1,heights: 10,widths: ['*', '*', '*' , '*'],
            body: [
              [{colSpan: 1, text: 'SPo2', style: 'header' }, '','', ''],
              [
                { text: 'Oxigenio: ', style: 'boldText' }, { text: BoOxygen, style: 'italicText' },
                { text: 'Valores:', style: 'boldText' } , { text: BoOxygenList, style: 'italicText' },
                
              ],
                            [
                { text: 'Bpm: ', style: 'boldText' }, { text: BoBpm, style: 'italicText' },
                { text: 'Valores:', style: 'boldText' } , { text: BoBpmList, style: 'italicText' },
                
              ],
            ]
          },         
          layout: 'lightHorizontalLines'
      },
     {
      style: 'tableExample', 
          table: {
            headerRows: 1,heights: 10,widths: ['*', '*'],
            body: [
              [{colSpan: 1, text: 'Temperatura', style: 'header' }, ''],
              [
                { text: 'Temperatura: ', style: 'boldText' }, { text: Temperature, style: 'italicText' },                 
              ],
            ]
          },         
          layout: 'lightHorizontalLines'
      },
     {
      style: 'tableExample', 
          table: {
            headerRows: 1,heights: 10,widths: ['*', '*', '*' , '*', '*', '*' ],
            body: [
              [{colSpan: 1, text: 'WHR', style: 'header' }, '','', '','',''],
              [
                { text: 'Ancas: ', style: 'boldText' }, { text: WhrHipline, style: 'italicText' },
                { text: 'Cintura:', style: 'boldText' } , { text: WhrWaistline, style: 'italicText' },
                { text: 'WHR: ', style: 'boldText' } , { text: Whr, style: 'italicText' }
              ],
            ]
          },         
          layout: 'lightHorizontalLines'
      },
     {
      style: 'tableExample', 
          table: {
            headerRows: 1,heights: 10,widths: ['*', '*', '*' , '*' ],
            body: [
              [{colSpan: 1, text: 'Açucar no Sangue', style: 'header' }, '','', ''],
              [
                { text: 'Glucose: ', style: 'boldText' }, { text: BloodSugar, style: 'italicText' },
                { text: 'Tipo Glucose:', style: 'boldText' } , { text: BloodSugarType, style: 'italicText' }
              ],
            ]
          },         
          layout: 'lightHorizontalLines'
      },
     {
      style: 'tableExample', 
          table: {
            headerRows: 1,heights: 10,widths: ['*', '*'],
            body: [
              [{colSpan: 2, text: 'Ácido Úrico', style: 'header' }, ''],
              [
                { text: 'Ácido Úrico: ', style: 'boldText' }, { text: Ua, style: 'italicText' },                 
              ],
            ]
          },         
          layout: 'lightHorizontalLines'
      },
     {
      style: 'tableExample', 
          table: {
            headerRows: 1,heights: 10,widths: ['*', '*'],
            body: [
              [{colSpan: 2, text: 'Colesterol', style: 'header' }, ''],
              [
                { text: 'Colesterol: ', style: 'boldText' }, { text: Chol, style: 'italicText' },                 
              ],
            ]
          },         
          layout: 'lightHorizontalLines'
      },
      {
        image: './public/images/logo.png',
        width: 50,
        pageBreak: 'before'
      },
     {
      style: 'tableExample', 
          table: {
            headerRows: 1,heights: 10,widths: ['*', '*' ],
            body: [
              [{colSpan: 1, text: '\n\n\nUrina', style: 'header' }, '',],
              
                [{ text: 'URO: ', style: 'boldText' }, { text: UrinalysisURO, style: 'italicText' }],
                [{ text: 'BLD:', style: 'boldText' } , { text: UrinalysisBLD, style: 'italicText' }],
                [{ text: 'BIL:', style: 'boldText' } , { text: UrinalysisBIL, style: 'italicText' }],
                [{ text: 'KET:', style: 'boldText' } , { text: UrinalysisKET, style: 'italicText' }],

                [{ text: 'LEU: ', style: 'boldText' }, { text: UrinalysisLEU, style: 'italicText' }],
                [{ text: 'GLU:', style: 'boldText' } , { text: UrinalysisGLU, style: 'italicText' }],
                [{ text: 'PRO:', style: 'boldText' } , { text: UrinalysisPRO, style: 'italicText' }],
                [{ text: 'PH:', style: 'boldText' } , { text: UrinalysisPH, style: 'italicText' }],

                [{ text: 'LEU: ', style: 'boldText' }, { text: UrinalysisNIT, style: 'italicText' }],
                [{ text: 'GLU:', style: 'boldText' } , { text: UrinalysisSG, style: 'italicText' }],
                [{ text: 'VC:', style: 'boldText' } , { text: UrinalysisVC, style: 'italicText' }],
                
              
            ]
          },         
          layout: 'lightHorizontalLines',
      },
     {
      style: 'tableExample', 
          table: {
            headerRows: 1,heights: 10,widths: ['*', '*', '*' , '*' ],
            body: [
              [{colSpan: 1, text: 'Hemoglobina', style: 'header' }, '','', ''],
              [
                { text: 'Hemoglobina: ', style: 'boldText' }, { text: Hb, style: 'italicText' },
                { text: 'Hematocrocito:', style: 'boldText' } , { text: HbHct, style: 'italicText' }
              ],
            ]
          },         
          layout: 'lightHorizontalLines',
      },

      {
      style: 'tableExample', 
          table: {
            headerRows: 1,heights: 10,widths: ['*', '*'],
            body: [
              [{colSpan: 1, text: 'Gordura no Sangue', style: 'header' }, ''],
              
                [{ text: 'Total Colesterol: ', style: 'boldText' }, { text: BloodFatTChol, style: 'italicText' }],
                [{ text: 'CHDL:', style: 'boldText' } , { text: BloodFatHdlChol, style: 'italicText' }],
                [{ text: 'Triglicerideos:', style: 'boldText' } , { text: BloodFatTrig, style: 'italicText' }],
                [{ text: 'Racio Lipidos Sangue:', style: 'boldText' } , { text: BloodFatTcHdl, style: 'italicText' }],
                [{ text: 'Lipoproteina Baixa Densidade: ', style: 'boldText' }, { text: BloodFatCalcLdl, style: 'italicText' }],
                [{ text: 'Resultado:', style: 'boldText' } , { text: BloodFatResult, style: 'italicText' }],             
            ]
          },         
          layout: 'lightHorizontalLines'
      },    
      {
      style: 'tableExample', 
          table: {
            headerRows: 1,heights: 10,widths: ['*', '*'],
            body: [
              [{colSpan: 1, text: 'Electrocardiograma', style: 'header' }, ''],
              
                [{ text: 'Hr: ', style: 'boldText' }, { text: PEEcgHr, style: 'italicText' }],
                [{ text: 'PAxis:', style: 'boldText' } , { text: PEEcgPAxis, style: 'italicText' }],
                [{ text: 'QRSAxis:', style: 'boldText' } , { text: PEEcgQRSAxis, style: 'italicText' }],
                [{ text: 'TAxis:', style: 'boldText' } , { text: PEEcgTAxis, style: 'italicText' }],
              
              
                [{ text: 'PR: ', style: 'boldText' }, { text: PEEcgPR, style: 'italicText' }],
                [{ text: 'QRS:', style: 'boldText' } , { text: PEEcgQRS, style: 'italicText' }],
                [{ text: 'QT:', style: 'boldText' } , { text: PEEcgQT, style: 'italicText' }],
                [{ text: 'QTc:', style: 'boldText' } , { text: PEEcgQTc, style: 'italicText' }],
              
              
                [{ text: 'RV5: ', style: 'boldText' }, { text: PEEcgRV5, style: 'italicText' }],
                [{ text: 'SV1:', style: 'boldText' } , { text: PEEcgSV1, style: 'italicText' }],
                [{ text: 'ResultStr:', style: 'boldText' } , { text: PEEcgResultStr, style: 'italicText' }],
             
            ]
          },         
          layout: 'lightHorizontalLines'
      },      
     
    //  {
    //   style: 'tableExample', 
    //       table: {
    //         headerRows: 1,heights: 10,widths: ['*', '*', '*' , '*', '*', '*', '*', '*' ],
    //         body: [
    //           [{colSpan: 1, text: 'Electrocardiograma', style: 'header' }, '','', '','','', '',''],
    //           [
    //             { text: 'Hr: ', style: 'boldText' }, { text: PEEcgHr, style: 'italicText' },
    //             { text: 'PAxis:', style: 'boldText' } , { text: PEEcgPAxis, style: 'italicText' },
    //             { text: 'QRSAxis:', style: 'boldText' } , { text: PEEcgQRSAxis, style: 'italicText' },
    //             { text: 'TAxis:', style: 'boldText' } , { text: PEEcgTAxis, style: 'italicText' },
    //           ],
    //           [
    //             { text: 'PR: ', style: 'boldText' }, { text: PEEcgPR, style: 'italicText' },
    //             { text: 'QRS:', style: 'boldText' } , { text: PEEcgQRS, style: 'italicText' },
    //             { text: 'QT:', style: 'boldText' } , { text: PEEcgQT, style: 'italicText' },
    //             { text: 'QTc:', style: 'boldText' } , { text: PEEcgQTc, style: 'italicText' },
    //           ],
    //           [
    //             { text: 'RV5: ', style: 'boldText' }, { text: PEEcgRV5, style: 'italicText' },
    //             { text: 'SV1:', style: 'boldText' } , { text: PEEcgSV1, style: 'italicText' },
    //             { text: 'ResultStr:', style: 'boldText' } , { text: PEEcgResultStr, style: 'italicText' },
    //             '' , '',
    //           ],
    //         ]
    //       },         
    //       layout: 'lightHorizontalLines'
    //   },
    
    
    
      // {
      // style: 'tableExample', 
      //     table: {
      //       headerRows: 1,heights: 1,
      //       body: [
      //         [{ text: 'Tipo', style: 'boldText' }, { text: '      ', style: 'boldText' },  { text: '      ', style: 'boldText' },{ text: 'Valor', style: 'boldText' }],
      //         [{ text: 'Altura: ', style:'boldText' }, ' ', ' ',          { text: Height, style:'italicText'}],
      //         [{ text: 'Pressão Sanguínea', style:'boldText' }, ' ', ' ', { text: BloodPressure, style:'italicText'}],
      //         [{ text: 'Bo:', style:'boldText' }, ' ',   ' ',             { text: Bo, style:'italicText'}],
      //         [{ text: 'Temperatura:', style:'boldText' }, ' ',' ',       { text: Temperature, style:'italicText'}],
      //         [{ text: 'Whr:', style:'boldText' }, ' ',  ' ',             { text: Whr, style:'italicText'}],
      //         [{ text: 'Açucar no Sangue:', style:'boldText' }, ' ',' ',  { text: BloodSugar, style:'italicText'}],
      //         [{ text: 'Ua:', style:'boldText' }, ' ', ' ',               { text: Ua, style:'italicText'}],
      //         [{ text: 'Chol:', style:'boldText' }, ' ', ' ',             { text: Chol, style:'italicText'}],
      //         [{ text: 'Urina:', style:'boldText' }, ' ',  ' ',           { text: Urinalysis, style:'italicText'}],
      //         [{ text: 'Hb:', style:'boldText' }, ' ', ' ',               { text: Hb, style:'italicText'}],
      //         [{ text: 'Visão:', style:'boldText' }, ' ',   ' ',          { text: Height, style:'italicText'}],
      //         [{ text: 'Dentição:', style:'boldText' }, ' ',  ' ',        { text: Tooth, style:'italicText'}],
      //         [{ text: 'Gordura no Sangue:', style:'boldText' }, ' ',' ', { text: BloodFat, style:'italicText'}],
      //       ]
      //     },
          
      //     layout: 'lightHorizontalLines'
      // },


      // { text: '\n      Resultados ElectroCardiograma                                                                                     \n\n', color: 'white', bold: true, background: '#A464A6' }, 

      // {
      //   style: 'tableExample',
      //   table: {
      //     widths: [200,  200],
      //     body: [
      //       [' ', ' '],
      //       [{
      //         table: {
                  
      //               body: [
      //                 [{ text: 'Tipo', style: 'boldText' }, { text: '      ', style: 'header' },  { text: '      ', style: 'header' },{ text: 'Valor', style: 'boldText'}],
      //                 [{ text: 'Hr: ', style:'boldText' }, ' ', ' ',          { text: PEEcgHr, style:'italicText'}],
      //                 [{ text: 'PAxis', style:'boldText' }, ' ', ' ', { text: PEEcgPAxis, style:'italicText'}],
      //                 [{ text: 'QRSAxis:', style:'boldText' }, ' ',   ' ',             { text: PEEcgQRSAxis, style:'italicText'}],
      //                 [{ text: 'TAxis:', style:'boldText' }, ' ',' ',       { text: PEEcgTAxis, style:'italicText'}],
      //                 [{ text: 'PR:', style:'boldText' }, ' ',  ' ',             { text: PEEcgPR, style:'italicText'}],
      //                 [{ text: 'QRS:', style:'boldText' }, ' ',' ',  { text: PEEcgQRS, style:'italicText'}],

      //               ],
      //         },
      //         layout: 'lightHorizontalLines'
      //       },
      //       {
      //         table: {
                    
      //               body: [
      //                 [{ text: 'Tipo', style: 'boldText' }, { text: '      ', style: 'header' },  { text: '      ', style: 'header' },{ text: 'Valor', style: 'boldText' }],

      //                 [{ text: 'QT:', style:'boldText' }, ' ', ' ',               { text: PEEcgQT, style:'italicText'}],
      //                 [{ text: 'QTc:', style:'boldText' }, ' ', ' ',             { text: PEEcgQTc, style:'italicText'}],
      //                 [{ text: 'RV5:', style:'boldText' }, ' ',  ' ',           { text: PEEcgRV5, style:'italicText'}],
      //                 [{ text: 'SV1:', style:'boldText' }, ' ', ' ',               { text: PEEcgSV1, style:'italicText'}],
      //                 [{ text: 'Result:', style:'boldText' }, ' ',   ' ',          { text: PEEcgResult, style:'italicText'}],
      //                 [{ text: 'ResultStr:', style:'boldText' }, ' ',  ' ',        { text: PEEcgResultStr, style:'italicText'}],
      //               ],
      //         },
      //         layout: 'lightHorizontalLines'
      //         },
      //       ]
      //     ]
      //   },
      //   layout: 'noBorders'
      // },
 
      {
        
          image: 'data:image/jpeg;base64,'+PEEcgEcgImg,
          pageBreak: 'before',
          width: 875,
          margin: -55 ,
          pageOrientation: 'landscape', // the orientation of this page
          

      },
    ],


    styles: {
		header: {
			fontSize: 10,
			bold: true,
			// margin: [0, 0, 0, 10]
		},
		subheader: {
			fontSize: 8,
			bold: true,
			margin: [0, 10, 0, 5]
    },
    normalText: {
			fontSize: 8,
		},
    boldText: {
			fontSize: 8,
      bold: true,

		},
      italicText: {
      alignment: 'right',
      fontSize: 8,
      italics: true,
      color: 'gray',

		},  
		tableExample: {
			margin: [0, 5, 0, 15]
		},
		tableOpacityExample: {
			margin: [0, 5, 0, 15],
			fillColor: 'blue',
			fillOpacity: 0.3
		},
		tableHeader: {
			bold: true,
			fontSize: 13,
			color: 'black'
		}
	},
	defaultStyle: {
		// alignment: 'justify'
	},
	patterns: {
		stripe45d: {
			boundingBox: [1, 1, 4, 4],
			xStep: 3,
			yStep: 3,
			pattern: '1 w 0 1 m 4 5 l s 2 0 m 5 3 l s'
		}
	}
};

var options = {
  // ...
}
  var pdfDoc = printer.createPdfKitDocument(docDefinition, options);

  pdfDoc.pipe(fs.createWriteStream('./public/JSON/'+fileName+'.pdf'));
  
  pdfDoc.end();
  

  res.send({
    result: objectValue.Member.Name
    //result: parseInt(a) + parseInt(b)
  });
});




app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});