/* Narzędzie zewnętrzne do generowania wysokiego zaufania długich i unikatowych w zamyśle danych
 typu string. Ograniczenia związane z samą biblioteką wymuszają import w poniższym formacie.
 Podobnie jest z typem `any`, niestety. Obecnie już stosuje się nowsze zamienniki. Dlaczego
 podobne narzędzia trzymamy w folderze `utils` zamiast wykorzystywać je bezpośrednio w plikach?
 Bo w razie ewentualnej podmiany narzędzia wystarczy uwzględnić ją tylko w jednym miejscu. */
export const { v4: uuid } = require('uuid');
