const Page = () => {
	retrun(
		<div key={page.booking_id} className="page" data-density="soft">
			<div className="page-header">{page.header} Events </div>
			<div className="page-content">
				{page && (
					<div>
						<div className="content-section">
							<button onClick={() => console.log(page)}></button>

							<div className="page-carousel">
								<div className="page-event-info">
									<div className="page-title">{page.title}</div>
									<div className="page-location">
										<div className="page-country">
											{page.country}, {page.region}
										</div>
										<div className="page-region"></div>
									</div>
									<div className="page-date">
										{page.date.slice(5)}, {page.time}
									</div>
									<button onClick={() => removeEvent(page.booking_id)}>
										DELETE
									</button>
									{/* <BsFillTrashFill onClick={} className='trash'/> */}
								</div>
							</div>
						</div>
						{/* Next Section */}
						{/* {page[1] && (<div className="content-section">
												<button onClick={() => console.log(page)}></button>
                                                
												<div className="page-carousel">
													<div className="page-event-info">
                                                    <div className="page-title">{page[1].title}</div>
														<div className="page-location">
                                                        <div className="page-country">
                                                        {page[1].country}, {page[1].region}
                                                                </div>
                                                                <div className="page-region"></div>
                                                            </div>
														<div className="page-date">
                                                        {page[1].date.slice(5)}, {page[1].time}
                                                        </div>
														<button
                                                        onClick={() => removeEvent(page[1].booking_id)}
														>
                                                        DELETE
														</button>
                                                        </div>
                                                        </div>
											</div>
                                        )} */}
					</div>
				)}
			</div>
		</div>
	);
};
export default Page;
