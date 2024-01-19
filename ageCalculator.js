function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
    var remAgeDays=((90*365)-(age*365));
    var remAgeWeek=((90*52)-(age*52));
    var remAgeMonths=((90*12)-(age*12));
    console.log("You have "+ remAgeDays+ " days, "+ remAgeWeek+" weeks, and " +remAgeMonths+" months left.");

/*************Don't change the code below**********/
}
lifeInWeeks(36);
