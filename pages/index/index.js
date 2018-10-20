//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    infoMess: '',
    calName: '',
    calN: ''
  },
  calInput: function(e) {
    this.setData({
      calN: e.detail.value
    })
  },
  calBtnClick: function() {
    if (this.data.calN.length == 0) {
      this.setData({
        infoMess: '请输入税前工资',
      })
    } else {
      var total = this.data.calN;
      if (total >= 25401) {
        total = (total - 25401 * 0.222);
      } else {
        total = (total - total * 0.222);
      }

      var afterTotal = 0;
      if (total > 5000) {
        var tax = total - 5000;
        if (tax <= 3000) {
          afterTotal = total - tax * 0.03;
        } else if (tax > 3000 && tax <= 12000) {
          afterTotal = total - 3000 * 0.03 - (tax - 3000) * 0.1;


        } else if (tax > 12000 && tax <= 25000) {
          afterTotal = total - 3000 * 0.03 - 9000 * 0.1 - (tax - 12000) * 0.2;
        } else if (tax > 25000 && tax <= 35000) {
          afterTotal = total - 3000 * 0.03 - 9000 * 0.1 - 13000 * 0.2 - (tax - 25000) * 0.25;
        } else if (tax > 35000 && tax <= 55000) {
          afterTotal = total - 3000 * 0.03 - 9000 * 0.1 - 13000 * 0.2 - 10000 * 0.25 - (tax - 35000) * 0.30;
        } else if (tax > 55000 && tax <= 80000) {
          afterTotal = total - 3000 * 0.03 - 9000 * 0.1 - 13000 * 0.2 - 10000 * 0.25 - 20000 * 0.30 - (tax - 55000) * 0.35;
        } else if (tax > 80000) {
          afterTotal = total - 3000 * 0.03 - 9000 * 0.1 - 13000 * 0.2 - 10000 * 0.25 - 20000 * 0.30 - 25000 * 0.35 - (tax - 80000) * 0.45;
        }

      } else {
        afterTotal = total;

      }
      this.setData({
        infoMess: afterTotal,
      })


    }
  },
  //重置按钮点击事件
  resetBtnClick: function(e) {
    this.setData({
      infoMess: '',
      calName: '',
      calN: ''
    })
  },
  onLoad: function() {
    console.log('onLoad')
  }
})