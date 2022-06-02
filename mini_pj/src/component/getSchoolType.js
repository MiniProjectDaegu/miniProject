function getSchoolType(schoolType) {
  switch (schoolType.schoolType) {
    case "element":
      return "초등학교";
    case "middle":
      return "중학교";
    default:
      return "고등학교";
  }
}
export default getSchoolType;
