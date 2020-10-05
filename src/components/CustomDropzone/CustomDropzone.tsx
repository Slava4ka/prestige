import React, {useMemo, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import axios from 'axios';
import {CircularProgress} from '@material-ui/core';
import styles from './dropzone.module.scss';
import GoogleIcon from '../Icons/GoogleIcon';
import DropboxIcon from '../Icons/DropboxIcon';
import Progress from '../Progress/Progress';

const baseStyle: {[key: string]: any} = {
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	padding: '30px',
	borderWidth: 2,
	borderRadius: 2,
	borderColor: '#eeeeee',
	borderStyle: 'dashed',
	backgroundColor: 'rgb(245, 80, 46)',
	color: 'white',
	outline: 'none',
	transition: 'border .24s ease-in-out',
};

const activeStyle = {
	backgroundColor: '#2196f3',
};

const acceptStyle = {
	backgroundColor: '#00e676',
};

const rejectStyle = {
	backgroundColor: '#ff1744',
};

const toPercent = (progressEvent: ProgressEvent): number => (
	Math.round((progressEvent.loaded * 100) / progressEvent.total)
);

interface ICustomDropzone {
	setRespData: (data: string[]) => void;
}

const CustomDropzone = ({setRespData}: ICustomDropzone) => {
	const [files, setFiles] = useState<any[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [progress, setProgress] = useState(0);

	const {
		getRootProps,
		getInputProps,
		isDragActive,
		isDragAccept,
		isDragReject,
	} = useDropzone({
		accept: '.ifc',
		maxFiles: 1,
		onDrop: (acceptedFiles) => {
			setFiles(acceptedFiles.map((file) => Object.assign(file, {
				preview: URL.createObjectURL(file),
			})));
		},
		disabled: loading,
	});

	const style = useMemo(() => ({
		...baseStyle,
		...(isDragActive ? activeStyle : {}),
		...(isDragAccept ? acceptStyle : {}),
		...(isDragReject ? rejectStyle : {}),
	}), [
		isDragActive,
		isDragReject,
		isDragAccept,
	]);
	return (
		<div className="container" style={{display: 'flex'}}>
			<div {...getRootProps({style})} className={styles.zone}>
				<input {...getInputProps()} />
				<div className={styles.label}>
					{
						files.length > 0
							? (
								<div className={styles.fileLayout}>
									{
										loading
											? <Progress progress={progress} />
											: <h2>{files[0].name}</h2>
									}
									{
										loading ? <CircularProgress className={styles.loader} /> : (
											<IconButton
												aria-label="send_file"
												onClick={(e) => {
													e.stopPropagation();
													console.log(files);
													const formData = new FormData();
													formData.append('file', files[0]);
													setLoading(true);
													try {
														axios.post(
															'http://18.218.111.236:8000',
															formData,
															{
																responseType: 'json',
																onUploadProgress: (progressEvent) => {
																	setProgress(toPercent(progressEvent));
																},
															},
														).then((response) => {
															console.log(response);
															setRespData(response.data);
														}).catch((error) => {
															console.log(error);
															if (error.response.status === 500) {
																alert('Возникла внутренняя ошибка сервера! '
																	+ 'Свяжитесь с администратором');
															} else {
																alert(error);
															}
														}).finally(() => {
															setLoading(false);
															setProgress(0);
														});
													} catch (error) {
														alert(error);
														console.log(error);
													}
												}}
											>
												<SendIcon />
											</IconButton>
										)
									}
								</div>
							)
							: <h2>Выберете IFC файл или перетащите его сюда </h2>
					}
				</div>
			</div>
			<div className={styles.buttons_group}>
				<div className={styles.round_buttons}>
					<DropboxIcon />
				</div>
				<div className={styles.round_buttons}>
					<GoogleIcon />
				</div>
			</div>
		</div>
	);
};

export default CustomDropzone;
