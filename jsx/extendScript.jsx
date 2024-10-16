$.runScript = {

	importarLT: function() {

		var sequence = app.project.activeSequence;
		var numt = sequence.videoTracks.numTracks;
		var time = sequence.getPlayerPosition();
		var newMOGRT = sequence.importMGTFromLibrary("ALURA_ESCOLAS", "LowerThird", time, numt, 0);
		newMOGRT.setSelected(1, 1);
		var components = newMOGRT.getMGTComponent();
		var escola = parseInt(escolaSel);
		components.properties[0].setValue(escola);

	},


	importarPC: function() {

		var sequence = app.project.activeSequence;
		var numt = sequence.videoTracks.numTracks;
		var time = sequence.getPlayerPosition();
		var newMOGRT = sequence.importMGTFromLibrary("ALURA_ESCOLAS", "Palavra-Chave", time, numt, 0);
		newMOGRT.setSelected(1, 1);
		var components = newMOGRT.getMGTComponent();
		var escola = parseInt(escolaSel);
		components.properties[0].setValue(escola);
		components.properties[1].setValue(false);

	},

	importarLista: function() {

		var sequence = app.project.activeSequence;
		var numt = sequence.videoTracks.numTracks;
		var time = sequence.getPlayerPosition();
		var newMOGRT = sequence.importMGTFromLibrary("ALURA_ESCOLAS", "Lista", time, numt, 0);
		newMOGRT.setSelected(1, 1);
		var components = newMOGRT.getMGTComponent();
		var escola = parseInt(escolaSel);
		components.properties[0].setValue(escola);

	},

	transicaoCurta: function() {

		var sequence = app.project.activeSequence;
		var numt = sequence.videoTracks.numTracks;
		var time = sequence.getPlayerPosition();
		var newMOGRT = sequence.importMGTFromLibrary("ALURA_ESCOLAS", "Transição_Curta", time, numt, 0);
		newMOGRT.setSelected(1, 1);
		var components = newMOGRT.getMGTComponent();
		var escola = parseInt(escolaSel);
		components.properties[0].setValue(escola);

	},

	transicaoLonga: function() {

		var sequence = app.project.activeSequence;
		var numt = sequence.videoTracks.numTracks;
		var time = sequence.getPlayerPosition();
		var newMOGRT = sequence.importMGTFromLibrary("ALURA_ESCOLAS", "Transição_Longa", time, numt, 0);
		newMOGRT.setSelected(1, 1);
		var components = newMOGRT.getMGTComponent();
		var escola = parseInt(escolaSel);
		components.properties[0].setValue(escola);

	},

	transicaoAudio: function() {

		var sequence = app.project.activeSequence;
		var numt = sequence.videoTracks.numTracks;
		var numta = sequence.audioTracks.numTracks;
		var time = sequence.getPlayerPosition();
		var newMOGRT = sequence.importMGTFromLibrary("ALURA_ESCOLAS", "Transição_02_Audio", time, numt, numta);
		newMOGRT.setSelected(1, 1);
		var components = newMOGRT.getMGTComponent();
		var escola = parseInt(escolaSel);
		components.properties[0].setValue(escola);

	},

	transicaoLatam: function() {

		var sequence = app.project.activeSequence;
		var numt = sequence.videoTracks.numTracks;
		var numta = sequence.audioTracks.numTracks;
		var time = sequence.getPlayerPosition();
		var newMOGRT = sequence.importMGTFromLibrary("ALURA_ESCOLAS", "Transição_01_Latam", time, numt, numta);
		newMOGRT.setSelected(1, 1);
		var components = newMOGRT.getMGTComponent();
		var escola = parseInt(escolaSel);
		components.properties[0].setValue(escola);

	},

	acessibilidade: function() {

		var sequence = app.project.activeSequence;
		var numt = sequence.videoTracks.numTracks;
		var time = sequence.getPlayerPosition();
		var newMOGRT = sequence.importMGTFromLibrary("ALURA_ESCOLAS", "#Acessibilidade", time, numt, 0);
		newMOGRT.setSelected(1, 1);
		var components = newMOGRT.getMGTComponent();
		var escola = parseInt(escolaSel);
		components.properties[0].setValue(escola);

	},

	vinhetaFinal: function() {

		var sequence = app.project.activeSequence;
		var numt = sequence.videoTracks.numTracks;
		var numta = sequence.audioTracks.numTracks;
		var time = sequence.getPlayerPosition();
		var newMOGRT = sequence.importMGTFromLibrary("ALURA_ESCOLAS", "Vinheta_Final", time, numt, numta);
		newMOGRT.setSelected(1, 1);

	},

	effectGaussianBlur: function() {

		app.enableQE();
		var effect = "Gaussian Blur";

		if (app.project.activeSequence == null) {
			alert("Please select a sequence first");
			return false;
		}

		var qeSequence = qe.project.getActiveSequence(0);
		var sequence = app.project.activeSequence;
		var videoTracks = sequence.videoTracks;

		var thisQETrack, thisVanillaClip;
		for (var i = 0; i < videoTracks.numTracks; i++) {
			thisQETrack = qeSequence.getVideoTrackAt(i);
			for (var e = 0; e < thisQETrack.numItems; e++) {
				if (thisQETrack.getItemAt(e).type.toString() != "Empty") {
					thisVanillaClip = getVanillaClip(thisQETrack.getItemAt(e), i);
					if (thisVanillaClip != null) {
						if (thisVanillaClip.isSelected() == true) {
							thisQETrack.getItemAt(e).addVideoEffect(qe.project.getVideoEffectByName(effect));
						}
					}
				}
			}
		}




		function getVanillaClip(qeClip, trackIndex) {
			for (var c = 0; c < app.project.activeSequence.videoTracks[trackIndex].clips.numItems; c++) {
				if (app.project.activeSequence.videoTracks[trackIndex].clips[c].name == qeClip.name && ((app.project.activeSequence.videoTracks[trackIndex].clips[c].end.seconds - app.project.activeSequence.videoTracks[trackIndex].clips[c].start.seconds).toFixed(2) == (qeClip.end.secs - qeClip.start.secs).toFixed(2))) {
					return app.project.activeSequence.videoTracks[trackIndex].clips[c];
				}
			}
		}
	},

	effectCrop: function() {

		app.enableQE();
		var effect = "Crop";

		if (app.project.activeSequence == null) {
			alert("Please select a sequence first");
			return false;
		}

		var qeSequence = qe.project.getActiveSequence(0);
		var sequence = app.project.activeSequence;
		var videoTracks = sequence.videoTracks;

		var thisQETrack, thisVanillaClip;
		for (var i = 0; i < videoTracks.numTracks; i++) {
			thisQETrack = qeSequence.getVideoTrackAt(i);
			for (var e = 0; e < thisQETrack.numItems; e++) {
				if (thisQETrack.getItemAt(e).type.toString() != "Empty") {
					thisVanillaClip = getVanillaClip(thisQETrack.getItemAt(e), i);
					if (thisVanillaClip != null) {
						if (thisVanillaClip.isSelected() == true) {
							thisQETrack.getItemAt(e).addVideoEffect(qe.project.getVideoEffectByName(effect));
						}
					}
				}
			}
		}




		function getVanillaClip(qeClip, trackIndex) {
			for (var c = 0; c < app.project.activeSequence.videoTracks[trackIndex].clips.numItems; c++) {
				if (app.project.activeSequence.videoTracks[trackIndex].clips[c].name == qeClip.name && ((app.project.activeSequence.videoTracks[trackIndex].clips[c].end.seconds - app.project.activeSequence.videoTracks[trackIndex].clips[c].start.seconds).toFixed(2) == (qeClip.end.secs - qeClip.start.secs).toFixed(2))) {
					return app.project.activeSequence.videoTracks[trackIndex].clips[c];
				}
			}
		}
	},

	effectHorizontalFlip: function() {

		app.enableQE();
		var effect = "Horizontal Flip";

		if (app.project.activeSequence == null) {
			alert("Please select a sequence first");
			return false;
		}

		var qeSequence = qe.project.getActiveSequence(0);
		var sequence = app.project.activeSequence;
		var videoTracks = sequence.videoTracks;

		var thisQETrack, thisVanillaClip;
		for (var i = 0; i < videoTracks.numTracks; i++) {
			thisQETrack = qeSequence.getVideoTrackAt(i);
			for (var e = 0; e < thisQETrack.numItems; e++) {
				if (thisQETrack.getItemAt(e).type.toString() != "Empty") {
					thisVanillaClip = getVanillaClip(thisQETrack.getItemAt(e), i);
					if (thisVanillaClip != null) {
						if (thisVanillaClip.isSelected() == true) {
							thisQETrack.getItemAt(e).addVideoEffect(qe.project.getVideoEffectByName(effect));
						}
					}
				}
			}
		}




		function getVanillaClip(qeClip, trackIndex) {
			for (var c = 0; c < app.project.activeSequence.videoTracks[trackIndex].clips.numItems; c++) {
				if (app.project.activeSequence.videoTracks[trackIndex].clips[c].name == qeClip.name && ((app.project.activeSequence.videoTracks[trackIndex].clips[c].end.seconds - app.project.activeSequence.videoTracks[trackIndex].clips[c].start.seconds).toFixed(2) == (qeClip.end.secs - qeClip.start.secs).toFixed(2))) {
					return app.project.activeSequence.videoTracks[trackIndex].clips[c];
				}
			}
		}
	},

	effectDeNoise: function() {

		app.enableQE();
		var effect = "DeNoise";

		if (app.project.activeSequence == null) {
			alert("Please select a sequence first");
			return false;
		}

		var qeSequence = qe.project.getActiveSequence(0);
		var sequence = app.project.activeSequence;
		var audioTracks = sequence.audioTracks;

		var thisQETrack, thisVanillaClip;
		for (var i = 0; i < audioTracks.numTracks; i++) {
			thisQETrack = qeSequence.getAudioTrackAt(i);
			for (var e = 0; e < thisQETrack.numItems; e++) {
				if (thisQETrack.getItemAt(e).type.toString() != "Empty") {
					thisVanillaClip = getVanillaClip(thisQETrack.getItemAt(e), i);
					if (thisVanillaClip != null) {
						if (thisVanillaClip.isSelected() == true) {
							thisQETrack.getItemAt(e).addAudioEffect(qe.project.getAudioEffectByName(effect));
						}
					}
				}
			}
		}




		function getVanillaClip(qeClip, trackIndex) {
			for (var c = 0; c < app.project.activeSequence.audioTracks[trackIndex].clips.numItems; c++) {
				if (app.project.activeSequence.audioTracks[trackIndex].clips[c].name == qeClip.name && ((app.project.activeSequence.audioTracks[trackIndex].clips[c].end.seconds - app.project.activeSequence.audioTracks[trackIndex].clips[c].start.seconds).toFixed(2) == (qeClip.end.secs - qeClip.start.secs).toFixed(2))) {
					return app.project.activeSequence.audioTracks[trackIndex].clips[c];
				}
			}
		}
	},

	effectDeEsser: function() {

		app.enableQE();
		var effect = "DeEsser";

		if (app.project.activeSequence == null) {
			alert("Please select a sequence first");
			return false;
		}

		var qeSequence = qe.project.getActiveSequence(0);
		var sequence = app.project.activeSequence;
		var audioTracks = sequence.audioTracks;

		var thisQETrack, thisVanillaClip;
		for (var i = 0; i < audioTracks.numTracks; i++) {
			thisQETrack = qeSequence.getAudioTrackAt(i);
			for (var e = 0; e < thisQETrack.numItems; e++) {
				if (thisQETrack.getItemAt(e).type.toString() != "Empty") {
					thisVanillaClip = getVanillaClip(thisQETrack.getItemAt(e), i);
					if (thisVanillaClip != null) {
						if (thisVanillaClip.isSelected() == true) {
							thisQETrack.getItemAt(e).addAudioEffect(qe.project.getAudioEffectByName(effect));
						}
					}
				}
			}
		}




		function getVanillaClip(qeClip, trackIndex) {
			for (var c = 0; c < app.project.activeSequence.audioTracks[trackIndex].clips.numItems; c++) {
				if (app.project.activeSequence.audioTracks[trackIndex].clips[c].name == qeClip.name && ((app.project.activeSequence.audioTracks[trackIndex].clips[c].end.seconds - app.project.activeSequence.audioTracks[trackIndex].clips[c].start.seconds).toFixed(2) == (qeClip.end.secs - qeClip.start.secs).toFixed(2))) {
					return app.project.activeSequence.audioTracks[trackIndex].clips[c];
				}
			}
		}
	},

	effectDeReverb: function() {

		app.enableQE();
		var effect = "DeReverb";

		if (app.project.activeSequence == null) {
			alert("Please select a sequence first");
			return false;
		}

		var qeSequence = qe.project.getActiveSequence(0);
		var sequence = app.project.activeSequence;
		var audioTracks = sequence.audioTracks;

		var thisQETrack, thisVanillaClip;
		for (var i = 0; i < audioTracks.numTracks; i++) {
			thisQETrack = qeSequence.getAudioTrackAt(i);
			for (var e = 0; e < thisQETrack.numItems; e++) {
				if (thisQETrack.getItemAt(e).type.toString() != "Empty") {
					thisVanillaClip = getVanillaClip(thisQETrack.getItemAt(e), i);
					if (thisVanillaClip != null) {
						if (thisVanillaClip.isSelected() == true) {
							thisQETrack.getItemAt(e).addAudioEffect(qe.project.getAudioEffectByName(effect));
						}
					}
				}
			}
		}




		function getVanillaClip(qeClip, trackIndex) {
			for (var c = 0; c < app.project.activeSequence.audioTracks[trackIndex].clips.numItems; c++) {
				if (app.project.activeSequence.audioTracks[trackIndex].clips[c].name == qeClip.name && ((app.project.activeSequence.audioTracks[trackIndex].clips[c].end.seconds - app.project.activeSequence.audioTracks[trackIndex].clips[c].start.seconds).toFixed(2) == (qeClip.end.secs - qeClip.start.secs).toFixed(2))) {
					return app.project.activeSequence.audioTracks[trackIndex].clips[c];
				}
			}
		}
	},


	effectParametricEq: function() {

		app.enableQE();
		var effect = "Parametric Equalizer";

		if (app.project.activeSequence == null) {
			alert("Please select a sequence first");
			return false;
		}

		var qeSequence = qe.project.getActiveSequence(0);
		var sequence = app.project.activeSequence;
		var audioTracks = sequence.audioTracks;

		var thisQETrack, thisVanillaClip;
		for (var i = 0; i < audioTracks.numTracks; i++) {
			thisQETrack = qeSequence.getAudioTrackAt(i);
			for (var e = 0; e < thisQETrack.numItems; e++) {
				if (thisQETrack.getItemAt(e).type.toString() != "Empty") {
					thisVanillaClip = getVanillaClip(thisQETrack.getItemAt(e), i);
					if (thisVanillaClip != null) {
						if (thisVanillaClip.isSelected() == true) {
							thisQETrack.getItemAt(e).addAudioEffect(qe.project.getAudioEffectByName(effect));
						}
					}
				}
			}
		}




		function getVanillaClip(qeClip, trackIndex) {
			for (var c = 0; c < app.project.activeSequence.audioTracks[trackIndex].clips.numItems; c++) {
				if (app.project.activeSequence.audioTracks[trackIndex].clips[c].name == qeClip.name && ((app.project.activeSequence.audioTracks[trackIndex].clips[c].end.seconds - app.project.activeSequence.audioTracks[trackIndex].clips[c].start.seconds).toFixed(2) == (qeClip.end.secs - qeClip.start.secs).toFixed(2))) {
					return app.project.activeSequence.audioTracks[trackIndex].clips[c];
				}
			}
		}
	},

	effectTransition: function() {

		app.enableQE();

		var transition = qe.project.getVideoTransitionByName(nomeTransition)

		if (app.project.activeSequence == null) {
			alert("Please select a sequence first");
			return false;
		}

		var qeSequence = qe.project.getActiveSequence(0);
		var sequence = app.project.activeSequence;
		var videoTracks = sequence.videoTracks;

		var thisQETrack, thisVanillaClip;
		for (var i = 0; i < videoTracks.numTracks; i++) {
			thisQETrack = qeSequence.getVideoTrackAt(i);
			for (var e = 0; e < thisQETrack.numItems; e++) {
				if (thisQETrack.getItemAt(e).type.toString() != "Empty") {
					thisVanillaClip = getVanillaClip(thisQETrack.getItemAt(e), i);
					if (thisVanillaClip != null) {
						if (thisVanillaClip.isSelected() == true) {
							thisQETrack.getItemAt(e).addTransition(transition, false, '00;00;00;10');
						}
					}
				}
			}
		}



		function getVanillaClip(qeClip, trackIndex) {
			for (var c = 0; c < app.project.activeSequence.videoTracks[trackIndex].clips.numItems; c++) {
				if (app.project.activeSequence.videoTracks[trackIndex].clips[c].name == qeClip.name && ((app.project.activeSequence.videoTracks[trackIndex].clips[c].end.seconds - app.project.activeSequence.videoTracks[trackIndex].clips[c].start.seconds).toFixed(2) == (qeClip.end.secs - qeClip.start.secs).toFixed(2))) {
					return app.project.activeSequence.videoTracks[trackIndex].clips[c];
				}
			}
		}

	},

	executarFuncaoJSX: function() {
		alert("A função JSX foi chamada e executada no Premiere Pro!");
		// Aqui você pode colocar qualquer ação que deseja no Premiere
	}
}
