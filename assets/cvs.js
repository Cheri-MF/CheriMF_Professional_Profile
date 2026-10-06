/* Set ready:true only after the approved PDF exists at its corresponding path.
   Keep filenames stable when replacing PDFs, then republish the same site. */
const cvs = {
  general: {file:'Cheri_Favel_General_Profile_CV.pdf', ready:true},
  process: {file:'Cheri_Favel_Process_Engineering_RD_CV.pdf', ready:true},
  digital: {file:'Cheri_Favel_AI_Digital_Content_CV.pdf', ready:true},
  operations: {file:'Cheri_Favel_Administration_Operations_CV.pdf', ready:true},
  education: {file:'Cheri_Favel_STEM_Education_Tutoring_CV.pdf', ready:true},
  hospitality: {file:'Cheri_Favel_Hospitality_Guest_Experience_CV.pdf', ready:true}
};
document.querySelectorAll('[data-cv]').forEach(card => {
  const cv=cvs[card.dataset.cv];
  if (!cv?.ready || !/^[\w-]+\.pdf$/i.test(cv.file)) return;
  const button=card.querySelector('button');
  const link=document.createElement('a');
  link.className='button primary';link.href='downloads/'+cv.file;link.download=cv.file;
  link.textContent='Download CV (PDF)';
  link.setAttribute('aria-label','Download '+card.querySelector('h3').textContent+' CV (PDF)');
  button.replaceWith(link);card.querySelector('.status').textContent='PDF · Ready to download';
});
if(Object.values(cvs).every(cv=>cv.ready))document.querySelector('.pending-note').hidden=true;
