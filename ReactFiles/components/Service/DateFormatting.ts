


type DateStr = string;


// z API ziskavam datum v formate DD-MM-YYYY preto tato uprava
export const formatDateToDDMMYYYY = (dateStr: DateStr | null | undefined) => {
    if (!dateStr) {
      return "";
    }
    const [day, month, year] = dateStr.split("-");
    return `${day}.${month}.${year}`;
  };