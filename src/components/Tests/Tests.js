import React from "react";
import './Tests.css';

const Tests = () => {
    return (
        <div>
            <svg viewBox="0 0 100 100" width="100" height="100">
                <defs>
                    <path
                        id="circle"
                        d="
                            M 50, 50
                            m -37, 0
                            a 37,37 0 1,1 74,0
                            a 37,37 0 1,1 -74,0"
                    />
                </defs>
                <text font-size="17">
                    <textPath xlinkHref="#circle">You spin me right round, baby...</textPath>
                </text>
            </svg>

            <div>
                <div className="ellipse"></div>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci omnis minus
                    sed ab. Veniam aperiam, assumenda iusto ad doloremque, autem sapiente hic ab
                    ducimus tenetur soluta, deserunt tempore illo eaque molestias natus. Nihil,
                    autem fugit! Id ratione hic voluptates vitae nisi consequuntur commodi, nobis,
                    aspernatur nostrum assumenda accusamus quo eligendi harum beatae dolorum velit
                    sed veniam! Pariatur odio ipsa culpa aperiam illum adipisci. Quisquam
                    necessitatibus repellendus quas. Ab nisi qui impedit facere neque placeat eaque
                    ipsa, nulla laudantium autem quis itaque, dolorem eos deserunt asperiores ullam
                    repudiandae excepturi maxime blanditiis doloribus vero? Illum recusandae quo,
                    autem ipsum omnis cumque vero!
                </p>
            </div>
        </div>
    );
};

export default Tests;
