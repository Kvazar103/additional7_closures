
function userCard(num) {

    this.balance = 100;
    this.transactionLimit = 100;
    this.historyLogs = [];
    this.key = num;
    this.getCardOption=function (){
       let x={
          balance:this.balance,
           transactionLimit:this.transactionLimit,
           historyLogs:this.historyLogs,
           key:this.key
       } 
       return x
    }
    this.putCredits=function (newBalance){
       this.balance+=newBalance;
       const time=new Date().toLocaleTimeString();
       const date=new Date().toLocaleDateString("en-US")
       this.historyLogs.push({operationType:"Putted Credits",credits:newBalance,fullBalance:this.balance,
           operationTime:`${time} ${date}`
       })
        return newBalance;
    }
    this.takeCredits=function (newBalance){
        this.balance-=newBalance;
        const time=new Date().toLocaleTimeString();
        const date=new Date().toLocaleDateString("en-US")
        this.historyLogs.push({operationType: "Taken Credits",credits: newBalance,fullBalance: this.balance,
        operationTime: `${time} ${date}`})
        return newBalance
    }
    this.setTransactionLimit=function (newTransaction){
        this.transactionLimit=newTransaction
        const time=new Date().toLocaleTimeString();
        const date=new Date().toLocaleDateString("en-US")
        this.historyLogs.push({operationType:"Transaction limit change",credits:newTransaction,operationTime:`${time} ${date}`})
        return this.transactionLimit
    }
    this.transferCredit=function (sum,card){
       let sumWithTaxes=(sum-((0.5*sum)/100))
       let result=`Sum that you want to sent:${sum}.Sum with taxes:${sumWithTaxes}`
        card.balance+=sum;
       this.balance-=sumWithTaxes;
       return result
    }

}

// function UserAccount (name){
//     this.name=name;
//     this.cards=[];
//     this.addCard=function (num){
//        let x= new userCard(num)
//         if(this.cards.length<3) {
//             this.cards.push(x)
//         }else if(this.cards.length===3){
//             console.log(`Cards can be only 3!`+` You have: ${this.cards.length} cards`)
//         }
//     }
//     this.getCardByKey=function (numKey){
//         for(let card of this.cards){
//             if(card.key===numKey){
//                 console.log(`Your card that was found by key:${numKey}`)
//                 console.log(card)
//                 return card.key
//             }
//         }
//     }
// }

class UserAccount{
    constructor(name) {
        this.name=name;
        this.cards=[];
        this.addCard=function (num){
            // let x= new userCard(num)
            if(this.cards.length<3) {
                this.cards.push(new userCard(num))
            }else if(this.cards.length===3){
                console.log(`Cards can be only 3!`+` You have: ${this.cards.length} cards`)
            }
        }
        this.getCardByKey=function (numKey){
            for(let card of this.cards){
                if(card.key===numKey){
                    console.log(`Your card that was found by key:${numKey}`)
                    console.log(card)
                    return card
                }
            }
        }
    }
  
   
}

// let x=new UserAccount('vasya')
// x.addCard(1)
// x.addCard(2)
// x.addCard(3)
// x.getCardByKey(1)
// console.log(x)

let user=new UserAccount('petya')
user.addCard(1)
user.addCard(2)
console.log(user)

let card1=user.getCardByKey(1)
let card2=user.getCardByKey(2)



card1.setTransactionLimit(800);
card1.transferCredit(20,card2)

card1.takeCredits(50)

console.log(card1.getCardOption)

console.log(card1)





