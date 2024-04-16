export default function getStudentIdsSum(list) {
  return list.reduce((acc, current) => acc + current.id, 0);
}
