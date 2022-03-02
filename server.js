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
			normal: path.join(__dirname, '..', 'rest-service-node', '/fonts/Roboto/Roboto-Regular.ttf'),
			bold: path.join(__dirname, '..', 'rest-service-node', '/fonts/Roboto/Roboto-Medium.ttf'),
			italics: path.join(__dirname, '..', 'rest-service-node', '/fonts/Roboto/Roboto-Italic.ttf'),
			bolditalics: path.join(__dirname, '..', 'rest-service-node', '/fonts/Roboto/Roboto-MediumItalic.ttf')
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

  const MachineId = req.body.MachineId;
  const RecordNo = req.body.RecordNo;
  const MeasureTime = req.body.MeasureTime;
  const DeviceType = req.body.DeviceType;
  const UnitNo = req.body.UnitNo;
  const UnitName = req.body.UnitName;

  const Accountorgid = req.body.Account.orgid;
  const Accountusername = req.body.Account.username;
  const MemberName = req.body.Member.Name;
  const MemberMobile = req.body.Member.Mobile;
  const MemberAge = req.body.Member.Age;
  const MemberSex = req.body.Member.Sex;
  const MemberAddress = req.body.Member.Address;
  const MemberBirthday = req.body.Member.Birthday;
  const MemberUserIcon = req.body.Member.UserIcon;
  const MemberNation = req.body.Member.Nation;
  const MemberIdCode= req.body.Member.IdCode;
  const MemberUserID = req.body.Member.UserID;

  const Height = req.body.Height;
  const BloodPressure = req.body.BloodPressure;
  const Bo = req.body.Bo;
  const Temperature = req.body.Temperature;
  const Whr = req.body.Whr;
  const BloodSugar = req.body.BloodSugar;
  const Ua = req.body.Ua;
  const Chol = req.body.Chol;
  const Urinalysis = req.body.Urinalysis;
  const Hb = req.body.Hb;
  const Vision = req.body.Vision;
  const Tooth = req.body.Tooth;

  const PEEcgHr = req.body.PEEcg.Hr;
  const PEEcgPAxis = req.body.PEEcg.PAxis;
  const PEEcgQRSAxis = req.body.PEEcg.QRSAxis;
  const PEEcgTAxis = req.body.PEEcg.TAxis;
  const PEEcgPR = req.body.PEEcg.PR;
  const PEEcgQRS = req.body.PEEcg.QRS;
  const PEEcgQT = req.body.PEEcg.QT;
  const PEEcgQTc = req.body.PEEcg.QTc;
  const PEEcgRV5 = req.body.PEEcg.RV5;
  const PEEcgSV1 = req.body.PEEcg.SV1;
  const PEEcgResult = req.body.PEEcg.Result;
  const PEEcgEcgImg = req.body.PEEcg.EcgImg;
  const PEEcgResultStr = req.body.PEEcg.ResultStr;
  const Ultrasonic = req.body.Ultrasonic;
  const BloodFat = req.body.BloodFat;
  const PsychologicalAssessment = req.body.PsychologicalAssessment;





  let data = JSON.stringify(req.body); 
  let objectValue = JSON.parse(data);
  let fileName=objectValue.Member.Name+'_'+objectValue.RecordNo
  // console.log(recv.contextResponses[0].contextElement.attributes[0].value);
  //console.log(data.Member.Name);
  console.log(objectValue.Member.Name);
  console.log("data.MachineId");
  console.log("Accountorgid -> "+Accountorgid);
	fs.writeFileSync('./JSON/'+fileName+'.json', data);
	//fs.writeFileSync('sonka.json', data);
	

  var docDefinition = { 
    content: [
      		{
	//	image: 'data:image/jpeg;base64,'+PEEcgEcgImg,
			image: './images/logo.png',
			width: 50
		},
      { text: '\n      Resumo Medicina no Trabalho                                                                                       \n\n',  color: 'white', bold: true, background: '#A464A6'},
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
          { text: 'Telemóvel: ', style:'boldText' },        { text: MemberMobile, style:'normalText' }
        ],
      
    },
          
      { text: '\n      Resultados Análises                                                                                               \n\n', color: 'white', bold: true, background: '#A464A6' },

   		{
			style: 'tableExample', 
          table: {
            headerRows: 1,heights: 1,
            body: [
              [{ text: 'Tipo', style: 'boldText' }, { text: '      ', style: 'boldText' },  { text: '      ', style: 'boldText' },{ text: 'Valor', style: 'boldText' }],
              [{ text: 'Altura: ', style:'boldText' }, ' ', ' ',          { text: Height, style:'italicText'}],
              [{ text: 'Pressão Sanguínea', style:'boldText' }, ' ', ' ', { text: BloodPressure, style:'italicText'}],
              [{ text: 'Bo:', style:'boldText' }, ' ',   ' ',             { text: Bo, style:'italicText'}],
              [{ text: 'Temperatura:', style:'boldText' }, ' ',' ',       { text: Temperature, style:'italicText'}],
              [{ text: 'Whr:', style:'boldText' }, ' ',  ' ',             { text: Whr, style:'italicText'}],
              [{ text: 'Açucar no Sangue:', style:'boldText' }, ' ',' ',  { text: BloodSugar, style:'italicText'}],
              [{ text: 'Ua:', style:'boldText' }, ' ', ' ',               { text: Ua, style:'italicText'}],
              [{ text: 'Chol:', style:'boldText' }, ' ', ' ',             { text: Chol, style:'italicText'}],
              [{ text: 'Urina:', style:'boldText' }, ' ',  ' ',           { text: Urinalysis, style:'italicText'}],
              [{ text: 'Hb:', style:'boldText' }, ' ', ' ',               { text: Hb, style:'italicText'}],
              [{ text: 'Visão:', style:'boldText' }, ' ',   ' ',          { text: Height, style:'italicText'}],
              [{ text: 'Dentição:', style:'boldText' }, ' ',  ' ',        { text: Tooth, style:'italicText'}],
              [{ text: 'Gordura no Sangue:', style:'boldText' }, ' ',' ', { text: BloodFat, style:'italicText'}],
            ]
          },
          
          layout: 'lightHorizontalLines'
			},



    // { text: '\n\n      Resultados Análises                                                  \n\n', color: 'white', bold: true, background: '#A464A6' },
    // {
    //   text:[
    //     { text: 'Altura: ', style:'boldText' },             { text: Height+'\n', fontSize: 9,normal: true }, 
    //     { text: 'Pressão Sanguínea: ', style:'boldText' },  { text: BloodPressure+'\n', fontSize: 9,normal: true }, 
    //     { text: 'Bo: ', style:'boldText' },                 { text: Bo+'\n', style:'normalText' },
    //     { text: 'Temperatura: ', style:'boldText' },        { text: Temperature+'\n', style:'normalText' },
    //     { text: 'Whr: ', style:'boldText' },                { text: Whr+'\n', style:'normalText' },
    //     { text: 'Açucar no Sangue: ', style:'boldText' },   { text: BloodSugar+'\n', style:'normalText' },
    //     { text: 'Ua: ', style:'boldText' },                 { text: Ua+'\n', style:'normalText' }, 
    //     { text: 'Chol: ', style:'boldText' },               { text: Chol+'\n', style:'normalText' }, 
    //     { text: 'Urina: ', style:'boldText' },              { text: Urinalysis+'\n', style:'normalText' }, 
    //     { text: 'Hb: ', style:'boldText' },                 { text: Hb+'\n', style:'normalText' }, 
    //     { text: 'Visão: ', style:'boldText' },              { text: Vision+'\n', style:'normalText' }, 
    //     { text: 'Dentição: ', style:'boldText' },           { text: Tooth+'\n', style:'normalText' }, 
    //     { text: 'Gordura no Sangue: ', style:'boldText' },  { text: BloodFat+'\n', style:'normalText' }, 

    //   ],
        
    // },
      { text: '\n      Resultados ElectroCardiograma                                                                                     \n\n', color: 'white', bold: true, background: '#A464A6' }, 

		{
			style: 'tableExample',
      table: {
        widths: [200,  200],
				body: [
					[' ', ' '],
					[{
            table: {
                 
                  body: [
                    [{ text: 'Tipo', style: 'header' }, { text: '      ', style: 'header' },  { text: '      ', style: 'header' },{ text: 'Valor', style: 'header' }],
                    [{ text: 'Hr: ', style:'boldText' }, ' ', ' ',          { text: PEEcgHr, style:'italicText'}],
                    [{ text: 'PAxis', style:'boldText' }, ' ', ' ', { text: PEEcgPAxis, style:'italicText'}],
                    [{ text: 'QRSAxis:', style:'boldText' }, ' ',   ' ',             { text: PEEcgQRSAxis, style:'italicText'}],
                    [{ text: 'TAxis:', style:'boldText' }, ' ',' ',       { text: PEEcgTAxis, style:'italicText'}],
                    [{ text: 'PR:', style:'boldText' }, ' ',  ' ',             { text: PEEcgPR, style:'italicText'}],
                    [{ text: 'QRS:', style:'boldText' }, ' ',' ',  { text: PEEcgQRS, style:'italicText'}],

                  ],
            },
             layout: 'lightHorizontalLines'
          },
          {
            table: {
                   
                  body: [
                    [{ text: 'Tipo', style: 'header' }, { text: '      ', style: 'header' },  { text: '      ', style: 'header' },{ text: 'Valor', style: 'header' }],

                    [{ text: 'QT:', style:'boldText' }, ' ', ' ',               { text: PEEcgQT, style:'italicText'}],
                    [{ text: 'QTc:', style:'boldText' }, ' ', ' ',             { text: PEEcgQTc, style:'italicText'}],
                    [{ text: 'RV5:', style:'boldText' }, ' ',  ' ',           { text: PEEcgRV5, style:'italicText'}],
                    [{ text: 'SV1:', style:'boldText' }, ' ', ' ',               { text: PEEcgSV1, style:'italicText'}],
                    [{ text: 'Result:', style:'boldText' }, ' ',   ' ',          { text: PEEcgResult, style:'italicText'}],
                    [{ text: 'ResultStr:', style:'boldText' }, ' ',  ' ',        { text: PEEcgResultStr, style:'italicText'}],
                  ],
            },
             layout: 'lightHorizontalLines'
            },
          ]
				]
      },
      layout: 'noBorders'
		},



   		// {
			// style: 'tableExample', 
      //     table: {
      //       headerRows: 1,
      //       body: [
      //         [{ text: 'Tipo', style: 'header' }, { text: '      ', style: 'header' },  { text: '      ', style: 'header' },{ text: 'Valor', style: 'header' }],
      //         [{ text: 'Hr: ', style:'boldText' }, ' ', ' ',          { text: PEEcgHr, style:'italicText'}],
      //         [{ text: 'PAxis', style:'boldText' }, ' ', ' ', { text: PEEcgPAxis, style:'italicText'}],
      //         [{ text: 'QRSAxis:', style:'boldText' }, ' ',   ' ',             { text: PEEcgQRSAxis, style:'italicText'}],
      //         [{ text: 'TAxis:', style:'boldText' }, ' ',' ',       { text: PEEcgTAxis, style:'italicText'}],
      //         [{ text: 'PR:', style:'boldText' }, ' ',  ' ',             { text: PEEcgPR, style:'italicText'}],
      //         [{ text: 'QRS:', style:'boldText' }, ' ',' ',  { text: PEEcgQRS, style:'italicText'}],
      //         [{ text: 'QT:', style:'boldText' }, ' ', ' ',               { text: PEEcgQT, style:'italicText'}],
      //         [{ text: 'QTc:', style:'boldText' }, ' ', ' ',             { text: PEEcgQTc, style:'italicText'}],
      //         [{ text: 'RV5:', style:'boldText' }, ' ',  ' ',           { text: PEEcgRV5, style:'italicText'}],
      //         [{ text: 'SV1:', style:'boldText' }, ' ', ' ',               { text: PEEcgSV1, style:'italicText'}],
      //         [{ text: 'Result:', style:'boldText' }, ' ',   ' ',          { text: PEEcgResult, style:'italicText'}],
      //         [{ text: 'ResultStr:', style:'boldText' }, ' ',  ' ',        { text: PEEcgResultStr, style:'italicText'}],
      //       ],
            
      //     },
          
      //     layout: 'lightHorizontalLines'
			// },





    //    {
    //   text:[
    //     { text: 'Hr: ', style:'boldText' }, { text: PEEcgHr+'\n', fontSize: 9,normal: true }, 
    //     { text: 'PAxis: ', style:'boldText' }, { text: PEEcgPAxis+'\n', fontSize: 9,normal: true }, 
    //     { text: 'QRSAxis: ', style:'boldText' }, { text: PEEcgQRSAxis+'\n', fontSize: 9,normal: true }, 
    //     { text: 'TAxis: ', style:'boldText' }, { text: PEEcgTAxis+'\n', fontSize: 9,normal: true }, 
    //     { text: 'PR: ', style:'boldText' }, { text: PEEcgPR+'\n', fontSize: 9,normal: true }, 
    //     { text: 'QRS: ', style:'boldText' }, { text: PEEcgQRS+'\n', fontSize: 9,normal: true }, 
    //     { text: 'QT: ', style:'boldText' }, { text: PEEcgQT+'\n', fontSize: 9,normal: true }, 
    //     { text: 'QTc: ', style:'boldText' }, { text: PEEcgQTc+'\n', fontSize: 9,normal: true }, 
    //     { text: 'RV5: ', style:'boldText' }, { text: PEEcgRV5+'\n', fontSize: 9,normal: true }, 
    //     { text: 'SV1: ', style:'boldText' }, { text: PEEcgSV1+'\n', fontSize: 9,normal: true }, 
    //     { text: 'SV1: ', style:'boldText' }, { text: PEEcgSV1+'\n', fontSize: 9,normal: true }, 
    //     { text: 'Result: ', style:'boldText' }, { text: PEEcgResult+'\n', fontSize: 9,normal: true }, 
    //     { text: 'ResultStr: ', style:'boldText' }, { text: PEEcgResultStr+'\n', fontSize: 9,normal: true }, 

    //   ],
        
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
			fontSize: 12,
			bold: true,
			margin: [0, 0, 0, 10]
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

  pdfDoc.pipe(fs.createWriteStream('./JSON/'+fileName+'.pdf'));
  
  pdfDoc.end();
  

  res.send({
    result: objectValue.Member.Name
    //result: parseInt(a) + parseInt(b)
  });
});




app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});