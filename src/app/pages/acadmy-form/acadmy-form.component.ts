import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl
} from '@angular/platform-browser';

@Component({
  selector: 'app-acadmy-form',
  templateUrl: './acadmy-form.component.html',
  styleUrls: ['./acadmy-form.component.css']
})
export class AcadmyFormComponent implements OnInit {
  dangerousVideoUrl: string;
  shareLink: SafeResourceUrl;
  VediosLink: SafeResourceUrl;

  showTab1 = false;
  showTab2 = true;
  showTab3 = false;
  showTab4 = false;
  showTab5 = false;
  width = '30%';
  showspiner = false;
  partAcadmi;
  objOfAcadmy: any = [];
  showDrpoDowenTgned = false;
  secoundForm = new FormGroup({});
  spechialForm = new FormGroup({});
  thirdForm: FormGroup;
  PreCertificates;
  date;
  statusOfRadioSpechial = false;
  list_of_files:any
  constructor(
    private rest: RestService,
    private route: Router,
    private sanitizer: DomSanitizer,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.getFilesSupport()
    this.getBranch();
    this.getGendar();
    this.getNationalities();
    this.GetAllowedPreCertificates();
    this.thirdForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      secoundName: new FormControl('', Validators.required),
      thirdName: new FormControl('', Validators.required),
      fourName: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]),
      // password: new FormControl('', [
      //   Validators.required,
      //   Validators.minLength(8)
      // ]),
      date: new FormControl('', Validators.required),
      gendar: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [
        Validators.required,
        ,
        Validators.min(111111111)
      ]),
      National: new FormControl('', Validators.required),
      NationalNumber: new FormControl('', [
        Validators.required,
        Validators.min(11111111111111)
      ]),
      userPhoto: new FormControl('', Validators.required),
      idPhoto: new FormControl('', Validators.required),
      QUALIFICATION: new FormControl('', Validators.required),
      tgnedPhoto: new FormControl('', Validators.required),
      NationalStatus: new FormControl('', Validators.required),
      moahlAlDrasi: new FormControl('', Validators.required),
      drgtAlMoahl: new FormControl('', Validators.required),
      dorTani: new FormControl('', Validators.required),
      sevenGondPhoto: new FormControl('', Validators.required),
      OTHER_FILES_FILE_NAME: new FormControl(''),
      DETERMINATION_PEOPLE_FILE_NAME : new FormControl(''),
      REGISTRATION_CERTIFICATE_FILE_NAME: new FormControl(
        '',
        Validators.required
      )
    });
  }

  // get branch //

  REGISTRATION_FEES_ACADEMIC;
  REGISTRATION_FEES_CREDIT;
  REGISTRATION_FEES_ACADEMIC_FOREIGN
  REGISTRATION_FEES_CREDIT_FOREIGN
  getBranch() {
    var array: any = localStorage.getItem('myArray');
    array = JSON.parse(array);
    this.partAcadmi = array.Branches;
    this.partAcadmi.forEach(branch => {
      branch.FACULTIES.forEach(element => {
        element.govTilte = branch.TITLE;
        element.branchID = branch.ID
        this.objOfAcadmy.push(element);
      });
    });
    console.log('array', this.partAcadmi);
    console.log(' this.objOfAcadmy', this.objOfAcadmy);
    this.objOfAcadmy.forEach(x => {
      x.DEPARTMENTS.forEach(element => {
        element.branchID = x.branchID
        if (x.FACULTY_ICON_FONT == "icon-theater") {
          element.box = true
          // this.secoundForm.addControl(
          //   `${x.FACULTY_NAME + x.govTilte + element.ID}`,
          //   new FormControl('', [])
          // );
        } else {
          this.secoundForm.addControl(
            `${x.FACULTY_NAME + x.govTilte}`,
            new FormControl('', [])
          );
        }

      });
    });

    var array: any = localStorage.getItem('myArray');
    array = JSON.parse(array);
    console.log("test",array)
    this.REGISTRATION_FEES_ACADEMIC = + array.REGISTRATION_FEES_ACADEMIC;
    this.REGISTRATION_FEES_CREDIT = + array.REGISTRATION_FEES_CREDIT;
    this.REGISTRATION_FEES_ACADEMIC_FOREIGN = + array.REGISTRATION_FEES_ACADEMIC_FOREIGN;
    this.REGISTRATION_FEES_CREDIT_FOREIGN = + array.REGISTRATION_FEES_CREDIT_FOREIGN;
    
  }

  get f() {
    return this.thirdForm.controls;
  }

  url: string;

  GetAllowedPreCertificates() {
    this.rest.GetAllowedPreCertificates().subscribe(res => {
      console.log(res);
      this.PreCertificates = res;
    });
  }

  //
  arrOfSecoundForm: any = [];
  dataOfT5sosat = [];
  totalPrice = 0;
  getdataOfSeoundForm() {
    console.log(this.secoundForm.value);
    let arrOfSecoundForm = Object.keys(this.secoundForm.value).map(index => {
      let person = this.secoundForm.value[index];
      return person;
    });

    for (let i = 0; i < arrOfSecoundForm.length; i++) {
      if (arrOfSecoundForm[i] == '') {
        arrOfSecoundForm.splice(i, 1);
      }
    }

    this.arrOfSecoundForm = [...this.arrOfSecoundForm,...arrOfSecoundForm]
    console.log(this.t5ososat);
    console.log(this.arrOfSecoundForm);
    for (let i = 0; i < this.arrOfSecoundForm.length; i++) {
      this.arrOfSecoundForm[i] = +this.arrOfSecoundForm[i];
      for (let j = 0; j < this.t5ososat.length; j++) {
        if (this.t5ososat[j].ID == this.arrOfSecoundForm[i]) {
          this.dataOfT5sosat.push(this.t5ososat[j]);
        }
      }
    }
    console.log("this.dataOfT5sosat",this.dataOfT5sosat)

    // const unique = this.dataOfT5sosat.filter(
    //   (obj, index) =>
    //     this.dataOfT5sosat.findIndex((item) => item.FACULTY_NAME === obj.FACULTY_NAME 
    //     && item.branchID === obj.branchID && item.DEPARTMENT_NAME === obj.DEPARTMENT_NAME) === index
    // );


    // this.dataOfT5sosat = unique

    // console.log("this.dataOfT5sosat",this.dataOfT5sosat)

    this.dataOfT5sosat.forEach(element => {
      if (element.isChecked == true) {
        this.totalPrice = this.totalPrice + this.REGISTRATION_FEES_CREDIT;
      } else if (element.isChecked == false) {
        this.totalPrice = this.totalPrice + this.REGISTRATION_FEES_ACADEMIC;
      }
    });

    // for (let j = 0; j < this.t5ososat.length; j++) {

    // }
    this.t5ososat = [];

    for (let i = 0; i < this.dataOfT5sosat.length; i++) {
      if (this.dataOfT5sosat[i].SPECIALIZATIONS.length != 0) {
        this.dataOfT5sosat[i].idControl = i;
        this.t5ososat.push(this.dataOfT5sosat[i]);
      }
    }
    this.getspechialItem(this.t5ososat);
  }

  // get item of acadmy //

  showButton = false;
  getItemOFAcadmy(value) {
    this.showButton = true;
    console.log(value);
    this.objOfAcadmy = value;
  }

  getspechialItem(value) {
    if (value.length != 0) {
      value.forEach(x => {
        x.SPECIALIZATIONS.forEach(element => {
          this.spechialForm.addControl(
            `${x.idControl}`,
            new FormControl('', [])
          );
        });
      });
      this.nextTab('3');
    } else {
      this.nextTab('4');
    }
  }
  checkSpechila(value) {
    this.statusOfRadioSpechial = true;
  }
  /********************************/



  //  get gendar //

  gendarArr;
  getGendar() {
    this.rest.getGendar().subscribe(res => {
      this.gendarArr = res;
    });
  }

  /********************************/

  // get Nationalities //

  NationalitiesArr;
  getNationalities() {
    this.rest.getNationalities().subscribe(res => {
      this.NationalitiesArr = res;
    });
  }

  goBack(value) {
    window.scroll(0, 0);
    if (value == '1') {
      this.showTab1 = true;
      this.showTab2 = false;
      this.showTab3 = false;
      this.width = '30%';
    } else if (value == '2') {
      this.showTab1 = false;
      this.showTab2 = true;
      this.showTab3 = false;
      this.width = '60%';
    }
  }
  nextTab(value) {
    window.scroll(0, 0);
    if (value == '2') {
      this.showTab1 = false;
      this.showTab2 = true;
      this.showTab3 = false;
      this.showTab4 = false;
      this.showTab5 = false;
      this.width = '40%';
    } else if (value == '3') {
      this.showTab1 = false;
      this.showTab2 = false;
      this.showTab3 = true;
      this.showTab4 = false;
      this.showTab5 = false;
      this.width = '60%';
    } else if (value == '4') {
      this.showTab1 = false;
      this.showTab2 = false;
      this.showTab3 = false;
      this.showTab4 = true;
      this.showTab5 = false;
      this.width = '80%';
    } else {
      this.showTab1 = false;
      this.showTab2 = false;
      this.showTab3 = false;
      this.showTab4 = false;
      this.showTab5 = true;
      this.width = '100%';
    }
  }

  fullName_submit = "احمد احمد احمد احمد"
  email_submit = "ahmedmostafa79799@gmail.com"
  regsiter() {
    window.scroll(0, 0);
    this.showspiner = true;
    let REQUESTED_DEPARTMENTS = [];
    let formSubmit: any;
    let formInfo: any;
    formInfo = this.thirdForm.value;
    for (let i = 0; i < this.arrOfSecoundForm.length; i++) {
      this.arrOfSecoundForm[i] = +this.arrOfSecoundForm[i];
    }

    for (let j = 0; j < this.objOfAcadmy.length; j++) {
      for (let q = 0; q < this.objOfAcadmy[j].DEPARTMENTS.length; q++) {
        if (this.objOfAcadmy[j].DEPARTMENTS[q].isChecked == true) {
          REQUESTED_DEPARTMENTS.push({
            BRANCH_ID: this.objOfAcadmy[j].branchID,
            DEPARTMENT_ID: +this.objOfAcadmy[j].DEPARTMENTS[q].ID,
            IS_CREDIT: true
          });
        } else if ( this.objOfAcadmy[j].DEPARTMENTS[q].isChecked == false) {
          REQUESTED_DEPARTMENTS.push({
            BRANCH_ID: this.objOfAcadmy[j].branchID,
            DEPARTMENT_ID: +this.objOfAcadmy[j].DEPARTMENTS[q].ID,
            IS_CREDIT: false
          });
        }
      }
    }
    console.log('arrOfSecoundForm', this.arrOfSecoundForm);
    console.log(REQUESTED_DEPARTMENTS);
    for (let i = 0; i < REQUESTED_DEPARTMENTS.length; i++) {
      for (let j = 0; j < this.t5ososat.length; j++) {
        if (REQUESTED_DEPARTMENTS[i].DEPARTMENT_ID == this.t5ososat[j].ID) {
          for (let q = 0; q < this.arrOfSpechialForm.length; q++) {
            this.arrOfSpechialForm[q] = +this.arrOfSpechialForm[q];
            for (let w = 0; w < this.t5ososat[j].SPECIALIZATIONS.length; w++) {
              if (this.t5ososat[j].SPECIALIZATIONS[w].ID == this.arrOfSpechialForm[q]) {
                REQUESTED_DEPARTMENTS[i].SPECIALIZATION_ID = this.arrOfSpechialForm[q];
              }
            }
          }
        }
      }
    }
    let finalArr = REQUESTED_DEPARTMENTS;
    // for (let i = 0; i < this.arrOfSecoundForm.length; i++) {
    //   for (let j = 0; j < REQUESTED_DEPARTMENTS.length; j++) {
    //     if (this.arrOfSecoundForm[i] == REQUESTED_DEPARTMENTS[j].DEPARTMENT_ID) {
    //       finalArr.push(REQUESTED_DEPARTMENTS[j]);
    //     }
    //   }
    // }
    // const unique = finalArr.filter(
    //   (obj, index) =>
    //     finalArr.findIndex((item) => item.BRANCH_ID === obj.BRANCH_ID && item.IS_CREDIT === obj.IS_CREDIT) === index
    // );
    // finalArr = unique
    // console.log("", unique);

    this.email_submit = formInfo.email
    this.fullName_submit = formInfo.firstName +
      ' ' +
      formInfo.secoundName +
      ' ' +
      formInfo.thirdName +
      ' ' +
      formInfo.fourName,

      formSubmit = {
        STUDENT_NAME:
          formInfo.firstName +
          ' ' +
          formInfo.secoundName +
          ' ' +
          formInfo.thirdName +
          ' ' +
          formInfo.fourName,
        BIRTH_DATE: formInfo.date,
        NAT_NUMBER: formInfo.NationalNumber,
        PHONE_NUMBER: formInfo.phoneNumber,
        EMAIL: formInfo.email,
        PASSWORD: formInfo.password,
        GENDER_ID: +formInfo.gendar,
        NATIONALITY_ID: +formInfo.National,
        REQUESTED_DEPARTMENTS: finalArr,
        PROFILE_IMG_FILE_NAME: formInfo.userPhoto,
        NAT_NUM_IMG_FILE_NAME: formInfo.idPhoto,
        QUALIFICATION_IMG_FILE_NAME: formInfo.QUALIFICATION,
        ACCEPTED_PRE_CERTIFICATIONS_ID: +formInfo.moahlAlDrasi,
        status: true
      };
    if (this.dorTaniNumber == '6' || this.dorTaniNumber == '7') {
      formSubmit.PRE_CERTIFICATIONS_GRADE = 0;
    } else {
      formSubmit.PRE_CERTIFICATIONS_GRADE = formInfo.drgtAlMoahl;
    }
    if (this.imageSeven != '') {
      formSubmit.OTHER_FILES_FILE_NAME = formInfo.OTHER_FILES_FILE_NAME;
    }
    if (
      this.gendar == '1' &&
      this.nation == '1' &&
      this.tagnedStat != 'لم يصبه الدور'
    ) {
      formSubmit.MILITARY_STATUS_IMG_FILE_NAME = formInfo.tgnedPhoto;
      formSubmit.MILITARY_STATUS = formInfo.NationalStatus;
    } else if (
      this.gendar == '1' &&
      this.nation == '1' &&
      this.tagnedStat == 'لم يصبه الدور'
    ) {
      formSubmit.MILITARY_STATUS = formInfo.NationalStatus;
    }

    if (this.dorTaniNumber == 2) {
      formSubmit.SECOND_EXAM_FILE_NAME = formInfo.dorTani;
    } else if (this.dorTaniNumber == 3) {
      formSubmit.REGISTRATION_CERTIFICATE_FILE_NAME =
        formInfo.REGISTRATION_CERTIFICATE_FILE_NAME;
    }

    if (this.tagnedStat == 'لم يصبه الدور' && this.age >= 20) {
      formSubmit.SEVEN_GOND_FILE_NAME = formInfo.sevenGondPhoto;
    }
    let result = [];
    for (let i = 0; i < this.myFile.length; i++) {
      if(this.myFile[i].id == '10'){
        
      }
      result.push(this.myFile[i].image);
    }

    result.push(formSubmit);

    console.log(result);
    this.rest.registerForm(result).subscribe(
      (res: any) => {
        console.log(res);
        this.nextTab('5');
        this.showspiner = false;
        this.url = res.Message;
        this.shareLink = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.url
        );
      },
      err => {
        console.log(err);
        this.showspiner = false;
        alert(err.error.Message);
      }
    );
  }

  // images upload //

  myFile = [];
  imageOne;
  imagetow;
  imagethree;
  imageFour;
  imageFive;
  imageSix;
  imageSeven = '';
  imagetamnia;
  imagetasaa;
  imageTen;
  t5ososat = [];

  filesArr = [];
  onFileChange(event, number) {
    let file = event.target.files[0];
    console.log(this.filesArr.includes(event.target.value));
    if (this.filesArr.includes(event.target.value)) {
      alert('لا يمكن رفع نفس  الملف مرتين');
    } else {
      this.filesArr.push(event.target.value);
      for (let i = 0; i < this.myFile.length; i++) {
        if (this.myFile[i].id == number) {
          this.myFile.splice(i, 1);
        }
      }
      if (number == '1') {
        this.imageOne = event.target.value;
        this.myFile.push({
          image: event.target.files[0],
          id: '1'
        });
      } else if (number == '2') {
        this.imagetow = event.target.value;
        this.myFile.push({
          image: event.target.files[0],
          id: '2'
        });
      } else if (number == '3') {
        this.imagethree = event.target.value;
        this.myFile.push({
          image: event.target.files[0],
          id: '3'
        });
      } else if (number == '4') {
        this.imageFour = event.target.value;
        this.myFile.push({
          image: event.target.files[0],
          id: '4'
        });
      } else if (number == '5') {
        this.imageFive = event.target.value;
        this.myFile.push({
          image: event.target.files[0],
          id: '5'
        });
      } else if (number == '6') {
        this.imageSix = event.target.value;
        this.myFile.push({
          image: event.target.files[0],
          id: '6'
        });
      } else if (number == '7') {
        this.imageSeven = event.target.value;
        this.myFile.push({
          image: event.target.files[0],
          id: '7'
        });
      } else if (number == '8') {
        this.imagetamnia = event.target.value;
        this.myFile.push({
          image: event.target.files[0],
          id: '8'
        });
      } else if (number == '9') {
        this.imagetasaa = event.target.value;
        this.myFile.push({
          image: event.target.files[0],
          id: '9'
        });
      }else {
        this.imageTen = event.target.value;
        this.myFile.push({
          image: event.target.files[0],
          id: '10'
        })
      }
    }

    console.log(this.myFile);
  }

  statusOfRadio = false;
  chnageStatusOFDepartment(value, depart, facultyName, item) {
    console.log(item)
    if(item.FACULTY_ICON_FONT != "icon-theater"){
      item.DEPARTMENTS.forEach(element => {
        element.radioCheck = false
      });
      depart.radioCheck = true
    }

    this.statusOfRadio = true;
    depart.FACULTY_NAME = facultyName;
    if (item.IS_CREDIT == true) {
      item.isChecked = true;
      depart.isChecked = true;
    } else {
      depart.isChecked = false;
    }
    if (value.target.checked == true) {
      if (depart.box) {
        this.arrOfSecoundForm.push(value.target.value)
        this.t5ososat.push(depart)
      }else {
        this.t5ososat.push(depart)
        this.t5ososat.forEach((element , index) => {
          if(element.radioCheck == false ){
            delete element.isChecked;
            this.t5ososat.splice(index, 1);
          }
        });
      }
    } else {
      const objWithIdIndex = this.arrOfSecoundForm.findIndex((obj) => obj == value.target.value);
      const objWithIdIndex1 = this.t5ososat.findIndex((obj) => obj.ID == value.target.value);
      if (objWithIdIndex > -1) {
        this.arrOfSecoundForm.splice(objWithIdIndex, 1);
        this.t5ososat.splice(objWithIdIndex1, 1);
      }
    }
    console.log(this.arrOfSecoundForm);
    console.log(this.t5ososat)
  }

  showTagnedUpload = false;
  gendar;

  changeGendar(valueOfGendar) {
    console.log(valueOfGendar.target.value);
    if (valueOfGendar.target.value == '1' && this.nation == '1') {
      this.showDrpoDowenTgned = true;
      if (this.tagnedStat == '') {
        this.showTagnedUpload = false;
      } else {
        this.showTagnedUpload = true;
      }
      this.gendar = valueOfGendar.target.value;
      this.thirdForm.get('NationalStatus').setValidators([Validators.required]);
      this.thirdForm.get('NationalStatus').updateValueAndValidity();
    } else {
      this.gendar = valueOfGendar.target.value;
      this.showDrpoDowenTgned = false;
      this.showTagnedUpload = false;
      this.thirdForm.get('tgnedPhoto').clearValidators();
      this.thirdForm.get('tgnedPhoto').updateValueAndValidity();
      this.thirdForm.get('NationalStatus').clearValidators();
      this.thirdForm.get('NationalStatus').updateValueAndValidity();
      this.thirdForm.get('sevenGondPhoto').clearValidators();
      this.thirdForm.get('sevenGondPhoto').updateValueAndValidity();
    }
  }

  nation;
  ifDloar = false
  changeNathon(valueOfGendar) {
    this.totalPrice = 0
    this.nation = valueOfGendar.target.value;
    if (this.nation == '1' && this.gendar == '1') {
      this.showDrpoDowenTgned = true;
      if (this.tagnedStat == '') {
        this.showTagnedUpload = false;
      } else {
        this.showTagnedUpload = true;
      }
      this.gendar = valueOfGendar.target.value;
      this.thirdForm.get('NationalStatus').setValidators([Validators.required]);
      this.thirdForm.get('NationalStatus').updateValueAndValidity();
    } else {
      this.showTagnedUpload = false;
      this.showDrpoDowenTgned = false;
      this.thirdForm.get('tgnedPhoto').clearValidators();
      this.thirdForm.get('tgnedPhoto').updateValueAndValidity();
      this.thirdForm.get('NationalStatus').clearValidators();
      this.thirdForm.get('NationalStatus').updateValueAndValidity();
      this.thirdForm.get('sevenGondPhoto').clearValidators();
      this.thirdForm.get('sevenGondPhoto').updateValueAndValidity();
    }

    if(this.nation == '1'){
 
      this.dataOfT5sosat.forEach(element => {
        if (element.isChecked == true) {
          this.totalPrice = this.totalPrice + this.REGISTRATION_FEES_CREDIT;
        } else if (element.isChecked == false) {
          this.totalPrice = this.totalPrice + this.REGISTRATION_FEES_ACADEMIC;
        }
      });
      this.ifDloar = false
    }else {
      this.thirdForm.get('NationalNumber').clearValidators();
      this.thirdForm.get('NationalNumber').updateValueAndValidity();
      this.dataOfT5sosat.forEach(element => {
        if (element.isChecked == true) {
          this.totalPrice = this.totalPrice + this.REGISTRATION_FEES_CREDIT_FOREIGN;
        } else if (element.isChecked == false) {
          this.totalPrice = this.totalPrice + this.REGISTRATION_FEES_ACADEMIC_FOREIGN;
        }
      });
      this.ifDloar = true
    }
  }

  tagnedStat = '';
  showSevenGondUpload = false;
  changeTagned(value) {
    this.tagnedStat = value.target.value;
    if (this.tagnedStat == 'لم يصبه الدور' && this.age >= 20) {
      this.showSevenGondUpload = true;
      this.showTagnedUpload = false;
      this.thirdForm.get('tgnedPhoto').clearValidators();
      this.thirdForm.get('tgnedPhoto').updateValueAndValidity();
    } else if (this.tagnedStat == 'لم يصبه الدور' && this.age < 20) {
      this.showTagnedUpload = false;
      this.showSevenGondUpload = false;
      this.thirdForm.get('tgnedPhoto').clearValidators();
      this.thirdForm.get('tgnedPhoto').updateValueAndValidity();
      this.thirdForm.get('sevenGondPhoto').clearValidators();
      this.thirdForm.get('sevenGondPhoto').updateValueAndValidity();
    } else {
      this.showTagnedUpload = true;
      this.showSevenGondUpload = false;
      this.thirdForm.get('sevenGondPhoto').clearValidators();
      this.thirdForm.get('sevenGondPhoto').updateValueAndValidity();
      this.thirdForm.get('tgnedPhoto').setValidators([Validators.required]);
      this.thirdForm.get('tgnedPhoto').updateValueAndValidity();
    }
  }

  IS_CREDIT(event, item) {
    console.log(event.target.checked);
    console.log(item);
    item.isChecked = event.target.checked;
  }

  validFirst = false;
  validsecound = false;
  validThird = false;
  validFour = false;
  ifArabic(str, number) {
    var p = /^[\u0600-\u06FF\s]+$/;
    if (str.target.value != 0) {
      if (!p.test(str.target.value) && number == 1) {
        this.validFirst = true;
      } else if (p.test(str.target.value) && number == 1) {
        this.validFirst = false;
      } else if (!p.test(str.target.value) && number == 2) {
        this.validsecound = true;
      } else if (p.test(str.target.value) && number == 2) {
        this.validsecound = false;
      } else if (!p.test(str.target.value) && number == 3) {
        this.validThird = true;
      } else if (p.test(str.target.value) && number == 3) {
        this.validThird = false;
      } else if (!p.test(str.target.value) && number == 4) {
        this.validFour = true;
      } else if (p.test(str.target.value) && number == 4) {
        this.validFour = false;
      }
    }
  }

  arrOfSpechialForm;
  getdataOfSpechialForm() {
    this.arrOfSpechialForm = Object.keys(this.spechialForm.value).map(index => {
      let person = this.spechialForm.value[index];
      return person;
    });

    for (let i = 0; i < this.arrOfSpechialForm.length; i++) {
      if (this.arrOfSpechialForm[i] == '') {
        this.arrOfSpechialForm.splice(i, 1);
      }
    }

    this.nextTab('4');
    console.log(this.arrOfSpechialForm);
  }

  moahlAldrasiStatus = false;
  dorTaniNumber;
  showshhadtAlKaed = false;
  dargtAlMoahl = false;
  changeMoahlAlDrasi(value) {
    this.dorTaniNumber = value.target.value;
    if (value.target.value == '3') {
      this.showshhadtAlKaed = true;
      this.thirdForm
        .get('REGISTRATION_CERTIFICATE_FILE_NAME')
        .setValidators([Validators.required]);
      this.thirdForm
        .get('REGISTRATION_CERTIFICATE_FILE_NAME')
        .updateValueAndValidity();
    } else {
      this.showshhadtAlKaed = false;
      this.thirdForm
        .get('REGISTRATION_CERTIFICATE_FILE_NAME')
        .clearValidators();
      this.thirdForm
        .get('REGISTRATION_CERTIFICATE_FILE_NAME')
        .updateValueAndValidity();
    }
    if (value.target.value == '2') {
      this.moahlAldrasiStatus = true;
      this.thirdForm.get('dorTani').setValidators([Validators.required]);
      this.thirdForm.get('dorTani').updateValueAndValidity();
    } else {
      this.moahlAldrasiStatus = false;
      this.thirdForm.get('dorTani').clearValidators();
      this.thirdForm.get('dorTani').updateValueAndValidity();
    }
    if (value.target.value == '6' || value.target.value == '7') {
      this.dargtAlMoahl = false;
      this.thirdForm.get('drgtAlMoahl').clearValidators();
      this.thirdForm.get('drgtAlMoahl').updateValueAndValidity();
    } else {
      this.dargtAlMoahl = true;
      this.thirdForm.get('drgtAlMoahl').setValidators([Validators.required]);
      this.thirdForm.get('drgtAlMoahl').updateValueAndValidity();
    }
  }

  ischecked = false;
  ischeckedPrice = false;
  ischeckedAcadmi = false;
  ischeckedA7tygat = false
  condtion(value) {
    console.log(value.target.checked);
    if (value.target.checked == true) {
      this.ischecked = true;
    } else {
      this.ischecked = false;
    }
  }
  condtionPrice(value) {
    console.log(value.target.checked);
    if (value.target.checked == true) {
      this.ischeckedPrice = true;
    } else {
      this.ischeckedPrice = false;
    }
  }
  condtionAcadmi(value) {
    console.log(value.target.checked);
    if (value.target.checked == true) {
      this.ischeckedAcadmi = true;
    } else {
      this.ischeckedAcadmi = false;
    }
  }
  statusOfAhtygaat(value) {
    console.log(value.target.checked);
    if (value.target.checked == true) {
      this.ischeckedA7tygat = true;
    } else {
      this.ischeckedA7tygat = false;
    }
  }

  age;
  getAdge(value) {
    console.log(this.date);
    let currentYear: number = new Date().getFullYear();
    const dateOfYear = '10/01/' + currentYear;
    console.log(dateOfYear);
    const convertAge = new Date(this.date);
    const data = new Date(dateOfYear);
    const timeDiff = Math.abs(data.getTime() - convertAge.getTime());
    this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
  }


  getFilesSupport() {
    this.rest.filesSupport().subscribe(res => {
      console.log("filesup",res)
      this.list_of_files = res
    })
  }
}
