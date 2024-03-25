import express, { Router } from 'express';
import { ClassType, LessonType, SubjectType } from './LessonType';
import  classes  from './classesDictionary'; // Substitua pelo caminho real do seu arquivo de turmas
import { subjectsDictionary } from './subjectsDictionary';
import { lessonsDictionary } from './lessonsDictionary';
const router: Router = express.Router();

router.get('/classes', (req, res) => {
    const classesInfo: { id: string, nome: string }[] = classes.map((classe:ClassType) => {
        return {
            id: classe.id,
            nome: classe.nome

        };
    });
    res.json(classesInfo);
});
router.get('/classes/:id/materias', (req, res) => {
    const classeId: string = req.params.id;
    const classe: ClassType | undefined = classes.find(classe => classe.id === classeId);
    if (!classe) {
        res.status(404).json({ mensagem: 'Classe não encontrada' });
        return;
    }
    const materias: { id: string, nome: string, lessonsLength:number }[] = classe.subjects.map((subject: SubjectType) =>{
        return {
            id: subject.id,
            nome: subject.nome,
            lessonsLength: subject.lessons.length,
        }
    })
    res.json(materias);
});
router.get("/materias/:id/atividades", (req, res) =>{
    const subjectId: string = req.params.id;
    const subject: SubjectType | undefined = subjectsDictionary.find(subject => subject.id === subjectId);
    if (!subject) {
        res.status(404).json({ mensagem: ' matéria não encontrada' });
        return;
    }
    const lessons = subject.lessons.map((lesson: LessonType )=>{
        return{
            id:lesson.id,
            nome:lesson.nome,
        }
    })
    res.json(lessons);
})
router.get("/atividades/:id",(req,res) => {
    const lessonId: string = req.params.id;
    const lesson: LessonType | undefined = lessonsDictionary.find(lesson => lesson.id === lessonId); 
    if(!lesson){
        res.status(404).json({ mensagem: ' matéria não encontrada' });
        return;
    }
    res.json(lesson);
})
export default router;
