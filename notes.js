const london = {
  firstName: "London",
  lastName: "Valentine",
  graduated: false,
  DOB: 2010,
  siblings: ["Paris", "Rio"],
  age: function () {
    return year - this.DOB;
  },
};

london.siblings.includes("Paris");
