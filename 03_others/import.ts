module Long.NameSpaces{
 export class C{}
}
new Long.NameSpaces.C();
import C = Long.NameSpaces.C;
new C();