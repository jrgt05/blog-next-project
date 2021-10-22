export const formatDate = (date: string): string => {
  const dateObj = new Date(date);
  return dateObj.toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
  });
};
