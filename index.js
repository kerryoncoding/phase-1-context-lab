/* Your Code Here */

function createEmployeeRecord(testEmployee){
    const employeeObject = {
        firstName: testEmployee[0],
        familyName: testEmployee[1],
        title: testEmployee[2],
        payPerHour: testEmployee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return (employeeObject)
}

function createEmployeeRecords(employeeArray){
    const employeeRecordArray = []
    employeeArray.forEach(element => {
        employeeRecordArray.push(createEmployeeRecord(element))  
    })
    return (employeeRecordArray)
}

function createTimeInEvent(dateStamp){
    const timeInObj = {
        type: "TimeIn",
        hour: Number(dateStamp.substr(11,14)),
        date: dateStamp.substr(0,10)
    }
    this.timeInEvents = [timeInObj, ...this.timeInEvents]
    return (this)
}

function createTimeOutEvent(dateStamp){
    const timeOutObj = {
        type: "TimeOut",
        hour: Number(dateStamp.substr(11,14)),
        date: dateStamp.substr(0,10)
    }
    this.timeOutEvents = [timeOutObj, ...this.timeOutEvents]
    //console.log(this)
    return (this)
}

function hoursWorkedOnDate(date){
    for (let i = 0; i<this.timeOutEvents.length; i++){
        if (this.timeOutEvents[i].date === date){
           return((this.timeOutEvents[i].hour - this.timeInEvents[i].hour)/100)
        }
    }
}

function wagesEarnedOnDate(date){
    //should review this
    return (hoursWorkedOnDate.call(this, date) * (this.payPerHour))
}

function findEmployeeByFirstName(srcArray, firstNameString){
   // console.log(srcArray)
        for (let i=0; i<srcArray.length; i++){
        if (srcArray[i].firstName === firstNameString){
         //   console.log("match")
            return (srcArray[i])
        }
    }
    return undefined
}

function calculatePayroll(employeeRecordArray){
    return employeeRecordArray.reduce(function(payrollSum, employeeRecord){
        return payrollSum + allWagesFor.call(employeeRecord)
    }, 0)
}
    

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

