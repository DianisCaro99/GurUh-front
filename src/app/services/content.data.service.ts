import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class ContentDataService {
  constructor(private http: HttpClient) {}

  getContents() {
    return this.http.get("https://xlocalhost:5000/api/v1/contents")
  }
/* 
  getSizeCollection() {
    return this.http.collection("CASOS").doc("sizeCollection").valueChanges();
  }

  getCaseByParam(param, value) {
    return this.http
      .collection("CASOS", (ref) =>
        ref.orderBy("fecha_inicio", "desc").where(param, "==", value).limit(15)
      )
      .valueChanges({
        idField: "id",
      });
  }

  getNextCases(first) {
    return this.http
      .collection("CASOS", (ref) =>
        ref.orderBy("fecha_inicio", "desc").startAfter(first).limit(15)
      )
      .valueChanges({ idField: "id" });
  }

  getPreviousCases(last) {
    return this.http
      .collection("CASOS", (ref) =>
        ref.orderBy("fecha_inicio", "desc").enhttpefore(last).limit(15)
      )
      .valueChanges({ idField: "id" });
  }

  getCasesFilterByDate(fecha_inicio: number, fecha_fin: number) {
    return this.http
      .collection("CASOS", (ref) =>
        ref.orderBy("fecha_inicio").startAt(fecha_inicio).endAt(fecha_fin)
      )
      .valueChanges({ idField: "id" });
  }

  getCasesOrderByMotivos() {
    return this.http
      .collection("CASOS", (ref) => ref.orderBy("motivoConsulta"))
      .valueChanges();
  }

  getCasesWrongDate() {
    return this.http
      .collection("CASOS", (ref) => ref.where("paciente", "==", ""))
      .valueChanges({ idField: "id" });
  }

  getCasesOrderByIntervencion() {
    return this.http
      .collection("CASOS", (ref) => ref.orderBy("linea_intervencion"))
      .valueChanges();
  }

  getCaseById(id: string) {
    return this.http.collection("CASOS").doc(id).valueChanges();
  }

  getCasesRemision() {
    return this.http
      .collection("CASOS", (ref) =>
        ref.where("linea_intervencion", "==", "Remisión")
      )
      .valueChanges({ idField: "id" });
  }

  getCasesOrderByPsicologo() {
    return this.http
      .collection("CASOS", (ref) => ref.orderBy("psicologo"))
      .valueChanges({ idField: "id" });
  }

  getCaseByPsicologo(psicologo: string) {
    return this.http
      .collection("CASOS", (ref) => ref.where("psicologo", "==", psicologo))
      .valueChanges({ idField: "id" });
  }

  addCase(newCase: any) {
    return this.http.collection("CASOS").add(newCase);
  }

  updateCase(id: string, caseToUpdate: any) {
    return this.http.collection("CASOS").doc(id).update(caseToUpdate);
  }

  deleteCase(id: string) {
    return this.http.collection("CASOS").doc(id).delete();
  }

  updateDate(
    id: string,
    fecha_inicio: number,
    fecha_fin: number,
    ultima_actualizacion: number
  ) {
    return this.http.collection("CASOS").doc(id).update({
      fecha_fin: fecha_inicio,
      fecha_inicio: fecha_fin,
      ultima_actualizacion: ultima_actualizacion,
    });
  } */
}